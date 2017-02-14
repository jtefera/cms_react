const combineReducers = require('redux').combineReducers;

const pageInfo = (state = {}, action) => {
    switch(action.type) {
        case 'PAGE_INFO_EDITED':
            return {
                ...action.info
            };
        default:
            return state;
    }
};
const authors = (state = {}, action) => {
    return state;
}
const posts = (state = {}, action) => {
    switch(action.type) {
        case 'POST_ADDED':
            return {
                ...state,
                [action.id]: action.post,
            };
        case 'POST_DELETED':
            return Object.keys(state)
                    .filter(key => key !== action.id)
                    .reduce((newState, key) => {
                        newState[key] = state[key]
                        return newState;
                    }, {});
        case 'POST_EDITED':
            return {
                ...state,
                [action.id]: action.post
            };
        default:
            return state;
    }
}

const pages = (state = {}, action) => {
    return state;
}
const reducer = combineReducers({
    pageInfo,
    authors,
    posts,
    pages
});

module.exports = reducer;