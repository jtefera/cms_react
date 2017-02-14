const combineReducers = require('redux').combineReducers;

const pageInfo = (state = {
    author: null,
    title: 'Title'
}, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
const authors = (state = {}, action) => {
    return state;
}
const posts = (state = {}, action) => {
    return state;
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