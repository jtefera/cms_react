const uuidV4 = require('uuid/v4');
module.exports = {};

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


function addingPost(post){
    return {
        type: 'ADDING_POST',
        post
    };
}

function postAdded(id, post) {
    return {
        type: 'POST_ADDED',
        id,
        post
    }
}

module.exports.postAdded = postAdded;

module.exports.addPost = function addPost(title, author, content) {
    return function addPostDispatch(dispatch) {
        const post = {
            title,
            author,
            content
        };
        dispatch(addingPost(post));
        sendJson({
            method: 'POST', 
            url: '/api/add_post', 
            data: post, 
            onSuccess: function onSuccess(response) {
                console.log(response);
                dispatch(postAdded(response.id, response.post));
            },
            onFailure: function onFailure(response) {
                console.log(response);
            }
        });
    }
};

function postEdited(id, post) {
    return {
        type: 'POST_EDITED',
        id: id,
        post: post
    }
}

module.exports.postEdited = postEdited;

module.exports.editPost = function editPost(id, title, author, content) {
    return function editPostDispatch(dispatch) {
        const post = {
            id,
            title,
            author,
            content
        };
        sendJson({
            method: 'PUT', 
            url: '/api/edit_post', 
            data: post,
            onSuccess: function onSuccess(response) {
                dispatch(postEdited(id, post));
            },
            onFailure: function onFailure(response) {
                console.log(response);
            }
        });
    }
};

function postDeleted(id) {
    return {
        type: 'POST_DELETED',
        id
    };
}

module.exports.postDeleted = postDeleted;

module.exports.deletePost = function deletePost(id) {
    return function editPostDispatch(dispatch) {
        dispatch({
            type: 'DELETING_POST',
            id
        });
        sendJson({
            method: 'DELETE', 
            url: '/api/delete_post', 
            data: {
                id
            },
            onSuccess: function onSuccess(response) {
                dispatch(postDeleted(id));
            },
            onFailure: function onFailure(response) {
                console.log(response);
            }
        });
    }
};

function editingPageInfo(newInfo) {
    return {
        type: 'EDITING_PAGE_INFO',
        info: newInfo
    }
}

function pageInfoEdited(newInfo) {
    return {
        type: 'PAGE_INFO_EDITED',
        info: newInfo
    }
}

module.exports.editPageInfo = function editPageInfo(newInfo) {
    return function(dispatch){
        dispatch(editingPageInfo(newInfo));
        sendJson({
            method: 'PUT',
            url: '/api/edit_page_info',
            data: newInfo,
            onSuccess: function onSuccess(res){
                dispatch(pageInfoEdited(res.pageInfo));
            },
            onFailure: console.error.bind(console)
        })
    }
};