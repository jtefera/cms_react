function sendJson({method, url, data, onLoad, onSuccess, onFailure}) {
    console.log('czgz', data);
    if(url === '/login') {
        if (onLoad) {
            onSuccess = onLoad;
            onFailure = onLoad;
        }
        if(data) {
            if(!data.username || !data.password) {
                Promise.reject({
                    error: 'username or password missing'
                }).catch(onFailure);
                return;
            }
            if(data.username === 'hello@jtefera.com' && data.password === 'Testing1234!') {
                Promise.resolve({
                    message: 'Succesfully logged',
                    user: {
                        email: 'hello@jtefera.com'
                    }
                }).then(onSuccess);
            }
        }
    }
}

module.exports = sendJson;