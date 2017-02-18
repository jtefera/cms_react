function sendJson({method, url, data, onLoad, onSuccess, onFailure}) {
    if(!method || !url) {
        throw new Error('method and url are required');
        return;
    }
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    const body = (data) ? JSON.stringify(data) : {};
    request.send(body);
    if(onLoad && (onSuccess || onFailure)) {
        console.warn(
            'You cannot define at the sametime onLoad and onSuccess or onFailure.\n',
            'Ignoring onSuccess and onFailure'
        );
    }
    if(onLoad){
        request.onload = onLoad.bind(null, request);
    } else {
        if(onSuccess || onFailure) {
            request.onload = function() {
                if(request.status === 200 && onSuccess) {
                    onSuccess(JSON.parse(request.responseText));
                } else if (onFailure) {
                    onFailure(JSON.parse(request.responseText));
                }
            }
        }
    }
}

module.exports = sendJson;