webpackJsonp([0],{

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var combineReducers = __webpack_require__(18).combineReducers;

var pageInfo = function pageInfo() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case 'PAGE_INFO_EDITED':
            return _extends({}, action.info);
        default:
            return state;
    }
};
var authors = function authors() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    return state;
};
var posts = function posts() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case 'POST_ADDED':
            return _extends({}, state, _defineProperty({}, action.id, action.post));
        case 'POST_DELETED':
            return Object.keys(state).filter(function (key) {
                return key !== action.id;
            }).reduce(function (newState, key) {
                newState[key] = state[key];
                return newState;
            }, {});
        case 'POST_EDITED':
            return _extends({}, state, _defineProperty({}, action.id, action.post));
        default:
            return state;
    }
};

var pages = function pages() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    return state;
};
var reducer = combineReducers({
    pageInfo: pageInfo,
    authors: authors,
    posts: posts,
    pages: pages
});

module.exports = reducer;

/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var React = __webpack_require__(1);

var _require = __webpack_require__(7),
    Provider = _require.Provider;

var _require2 = __webpack_require__(14),
    Router = _require2.Router,
    Route = _require2.Route,
    IndexRoute = _require2.IndexRoute,
    browserHistory = _require2.browserHistory;

var Layout = __webpack_require__(155);
var Home = __webpack_require__(153);
var EditPosts = __webpack_require__(151);
var EditPost = __webpack_require__(149);
var AddPost = __webpack_require__(145);
var EditPageInfo = __webpack_require__(147);

var createElement = function createElement(Component, props) {
    return React.createElement(Component, props);
};
if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    createElement = function createElement(Component, props) {
        return React.createElement(Component, _extends({}, props, window.PROPS));
    };
}

module.exports = React.createElement(
    Router,
    { history: browserHistory, createElement: createElement },
    React.createElement(
        Route,
        { path: '/admin', component: Layout },
        React.createElement(IndexRoute, { component: Home }),
        React.createElement(Route, { path: 'edit_posts', component: EditPosts }),
        React.createElement(Route, { path: 'edit_post/:postId', component: EditPost }),
        React.createElement(Route, { path: 'add_post', component: AddPost }),
        React.createElement(Route, { path: 'edit_page_info', component: EditPageInfo })
    )
);

/***/ },

/***/ 139:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(1);

var _require = __webpack_require__(14),
    Link = _require.Link;

var PostEditor = function PostEditor(_ref) {
    var title = _ref.title,
        author = _ref.author,
        content = _ref.content,
        saveHandler = _ref.saveHandler,
        cancelLink = _ref.cancelLink;

    var titleInput = void 0,
        authorInput = void 0,
        contentInput = void 0;
    return React.createElement(
        'form',
        null,
        React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
                'label',
                { htmlFor: 'title' },
                'Title'
            ),
            React.createElement('input', {
                type: 'text',
                id: 'title',
                ref: function ref(node) {
                    titleInput = node;
                },
                placeholder: 'Title',
                className: 'form-control',
                defaultValue: title || ''
            })
        ),
        React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
                'label',
                { htmlFor: 'author' },
                'Author'
            ),
            React.createElement('input', {
                type: 'text',
                id: 'author',
                ref: function ref(node) {
                    authorInput = node;
                },
                placeholder: 'Author',
                className: 'form-control',
                defaultValue: author || ''
            })
        ),
        React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement(
                'label',
                { htmlFor: 'content' },
                'Content'
            ),
            React.createElement('textarea', {
                type: 'text',
                id: 'content',
                ref: function ref(node) {
                    contentInput = node;
                },
                placeholder: 'Content',
                className: 'form-control',
                defaultValue: content || '',
                rows: '7'
            })
        ),
        React.createElement(
            'button',
            {
                type: 'submit',
                className: 'btn btn-primary',
                onClick: function onClick(e) {
                    e.preventDefault();
                    var titleVal = titleInput.value;
                    var authorVal = authorInput.value;
                    var contentVal = contentInput.value;
                    saveHandler(titleVal, authorVal, contentVal);
                }
            },
            'Save'
        ),
        React.createElement(
            Link,
            { to: cancelLink },
            ' Cancel'
        )
    );
};

module.exports = PostEditor;

/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(1);

var _require = __webpack_require__(14),
    Link = _require.Link;

var _require2 = __webpack_require__(7),
    connect = _require2.connect;

var _require3 = __webpack_require__(39),
    _deletePost = _require3.deletePost;

var dateFormatter = __webpack_require__(50);

var PostPresentational = function PostPresentational(_ref) {
    var author = _ref.author,
        authorId = _ref.authorId,
        date = _ref.date,
        id = _ref.id,
        title = _ref.title,
        deletePost = _ref.deletePost;

    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            null,
            React.createElement(
                'h4',
                null,
                React.createElement(
                    Link,
                    { to: '/admin/edit_post/' + id },
                    title
                )
            ),
            React.createElement(
                'div',
                null,
                author,
                ' | ',
                dateFormatter(date)
            ),
            React.createElement(
                'a',
                {
                    href: '#',
                    onClick: function onClick(e) {
                        e.preventDefault();
                        deletePost(id);
                    }
                },
                'Delete link '
            ),
            ' |',
            React.createElement(
                Link,
                { to: '/admin/edit_post/' + id },
                ' Edit link'
            )
        )
    );
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        deletePost: function deletePost(id) {
            return dispatch(_deletePost(id));
        }
    };
};
var wrapper = connect(null, mapDispatchToProps);
var Post = wrapper(PostPresentational);
var PostsList = function PostsList(_ref2) {
    var posts = _ref2.posts;

    var postsEl = posts.map(function (post) {
        return React.createElement(Post, _extends({}, post, { key: post.id }));
    });
    return React.createElement(
        'div',
        null,
        postsEl
    );
};

module.exports = PostsList;

/***/ },

/***/ 141:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(140);

/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(1);

var _require = __webpack_require__(14),
    Link = _require.Link;

var style = __webpack_require__(173);

var Sidebar = function Sidebar(props) {
    return React.createElement(
        'div',
        { className: style.container },
        React.createElement(
            'div',
            null,
            React.createElement(
                Link,
                { to: '/admin/edit_posts' },
                'Edit Posts'
            )
        ),
        React.createElement(
            'div',
            null,
            React.createElement(
                Link,
                { to: '/admin/add_post' },
                'Add Post'
            )
        ),
        React.createElement(
            'div',
            null,
            React.createElement(
                Link,
                { to: '/admin/edit_page_info' },
                'Edit basic info'
            )
        ),
        React.createElement(
            'div',
            null,
            React.createElement(
                'a',
                { href: '/logout' },
                'Logout'
            )
        )
    );
};

module.exports = Sidebar;

/***/ },

/***/ 143:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(142);

/***/ },

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(1);
var PostEditor = __webpack_require__(84);

var _require = __webpack_require__(7),
    connect = _require.connect;

var _require2 = __webpack_require__(39),
    addPost = _require2.addPost;

var AddPost = function AddPost(_ref) {
    var saveHandler = _ref.saveHandler;

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            null,
            'New Post'
        ),
        React.createElement('hr', null),
        React.createElement(PostEditor, {
            saveHandler: saveHandler,
            cancelLink: '/admin/'
        })
    );
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return {
        saveHandler: function saveHandler(title, author, content) {
            dispatch(addPost(title, author, content));
        }
    };
};

var wrapper = connect(null, mapDispatchToProps);

module.exports = wrapper(AddPost);

/***/ },

/***/ 145:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(144);

/***/ },

/***/ 146:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(1);

var _require = __webpack_require__(7),
    connect = _require.connect;

var _require2 = __webpack_require__(39),
    editPageInfo = _require2.editPageInfo;

var _require3 = __webpack_require__(14),
    Link = _require3.Link;

var EditPageInfo = function EditPageInfo(_ref) {
    var title = _ref.title,
        description = _ref.description,
        admin = _ref.admin,
        saveHandler = _ref.saveHandler;

    var titleInput = void 0,
        descriptionInput = void 0,
        adminInput = void 0;
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            null,
            'Page Info Editor'
        ),
        React.createElement('hr', null),
        React.createElement(
            'form',
            null,
            React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement(
                    'label',
                    { htmlFor: 'title' },
                    'Title of the Blog'
                ),
                React.createElement('input', {
                    id: 'title',
                    type: 'text',
                    defaultValue: title,
                    placeholder: 'Title',
                    className: 'form-control',
                    ref: function ref(node) {
                        return titleInput = node;
                    }
                })
            ),
            React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement(
                    'label',
                    { htmlFor: 'admin' },
                    'Admin of the Blog'
                ),
                React.createElement('input', {
                    id: 'admin',
                    type: 'text',
                    defaultValue: admin,
                    placeholder: 'Admin',
                    className: 'form-control',
                    ref: function ref(node) {
                        return adminInput = node;
                    }
                })
            ),
            React.createElement(
                'div',
                { className: 'form-group' },
                React.createElement(
                    'label',
                    { htmlFor: 'description' },
                    'Description of the Blog'
                ),
                React.createElement('textarea', {
                    id: 'description',
                    type: 'text',
                    defaultValue: description,
                    placeholder: 'Description',
                    className: 'form-control',
                    ref: function ref(node) {
                        return descriptionInput = node;
                    },
                    rows: '12'
                })
            ),
            React.createElement(
                'button',
                {
                    className: 'btn btn-primary',
                    onClick: function onClick(e) {
                        e.preventDefault();
                        var newInfo = {
                            admin: adminInput.value,
                            title: titleInput.value,
                            description: descriptionInput.value
                        };
                        saveHandler(newInfo);
                    }
                },
                ' Save'
            ),
            React.createElement(
                Link,
                { to: '/admin' },
                ' Cancel'
            )
        )
    );
};

var mapStateToProps = function mapStateToProps(state) {
    return _extends({}, state.pageInfo);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        saveHandler: function saveHandler(newInfo) {
            return dispatch(editPageInfo(newInfo));
        }
    };
};

var wrapper = connect(mapStateToProps, mapDispatchToProps);

module.exports = wrapper(EditPageInfo);

/***/ },

/***/ 147:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(146);

/***/ },

/***/ 148:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(1);
var PostEditor = __webpack_require__(84);

var _require = __webpack_require__(7),
    connect = _require.connect;

var _require2 = __webpack_require__(39),
    editPost = _require2.editPost;

var EditPost = function EditPost(_ref) {
    var post = _ref.post,
        saveHandler = _ref.saveHandler;

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            null,
            'Post Editor'
        ),
        React.createElement('hr', null),
        React.createElement(PostEditor, _extends({}, post, {
            saveHandler: saveHandler,
            cancelLink: '/admin/edit_posts'
        }))
    );
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        post: state.posts[ownProps.params.postId]
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return {
        saveHandler: function saveHandler(title, author, content) {
            dispatch(editPost(ownProps.params.postId, title, author, content));
        }
    };
};

var wrapper = connect(mapStateToProps, mapDispatchToProps);

module.exports = wrapper(EditPost);

/***/ },

/***/ 149:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(148);

/***/ },

/***/ 150:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(1);

var _require = __webpack_require__(7),
    connect = _require.connect;

var PostsList = __webpack_require__(141);

var EditPosts = function EditPosts(_ref) {
    var posts = _ref.posts;

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            null,
            'Edit Posts'
        ),
        React.createElement('hr', null),
        React.createElement(
            'i',
            null,
            'Select Post to edit or delete'
        ),
        React.createElement(PostsList, { posts: posts })
    );
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        posts: Object.keys(state.posts).reverse().map(function (key) {
            return state.posts[key];
        })
    };
};

var wrapper = connect(mapStateToProps);
module.exports = wrapper(EditPosts);

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(150);

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(1);
var Home = function Home(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            null,
            'Home'
        ),
        React.createElement('hr', null),
        'This is the home dashboard'
    );
};

module.exports = Home;

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(152);

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(1);

var _require = __webpack_require__(7),
    connect = _require.connect;

var style = __webpack_require__(174);
var Sidebar = __webpack_require__(143);

var Layout = function Layout(props) {
    var customProps = props.customProps;

    return React.createElement(
        'html',
        null,
        React.createElement(
            'head',
            null,
            React.createElement(
                'title',
                null,
                customProps.pageInfo && customProps.pageInfo.title ? 'Admin: ' + customProps.pageInfo.title : 'Admin Page'
            ),
            React.createElement('link', {
                rel: 'stylesheet',
                href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css',
                integrity: 'sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ',
                crossOrigin: 'anonymous' }),
            React.createElement('link', {
                rel: 'stylesheet',
                href: '/css/style.css'
            })
        ),
        React.createElement(
            'body',
            null,
            React.createElement(
                'div',
                { className: style.container + ' container' },
                React.createElement(
                    'div',
                    { className: style.sidebar },
                    React.createElement(Sidebar, null)
                ),
                React.createElement(
                    'div',
                    { className: style.main },
                    props.children
                )
            ),
            React.createElement('script', { dangerouslySetInnerHTML: {
                    __html: 'window.PROPS=' + JSON.stringify(customProps)
                } }),
            React.createElement('script', { type: 'text/javascript', src: '/js/vendor/index.js' }),
            React.createElement('script', { type: 'text/javascript', src: '/js/admin/index.js' })
        )
    );
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        customProps: state
    };
};
var wrapper = connect(mapStateToProps);
module.exports = wrapper(Layout);

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(154);

/***/ },

/***/ 173:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"style__container___1YLF5"};

/***/ },

/***/ 174:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"sidebar":"style__sidebar___3wZXY","container":"style__container___3smRC","main":"style__main___YYp5W"};

/***/ },

/***/ 327:
/***/ function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(83)))

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

var rng = __webpack_require__(328);
var bytesToUuid = __webpack_require__(327);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(12);

var _require = __webpack_require__(7),
    Provider = _require.Provider;

var _require2 = __webpack_require__(18),
    createStore = _require2.createStore,
    compose = _require2.compose,
    applyMiddleware = _require2.applyMiddleware;

var thunkMiddleware = __webpack_require__(35).default;
var reducer = __webpack_require__(134);
var adminRouter = __webpack_require__(135);

var store = createStore(reducer, window.PROPS, compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
ReactDOM.render(React.createElement(
    Provider,
    { store: store },
    adminRouter
), document);

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var uuidV4 = __webpack_require__(329);
var sendJson = __webpack_require__(51);
module.exports = {};

function addingPost(post) {
    return {
        type: 'ADDING_POST',
        post: post
    };
}

function postAdded(id, post) {
    return {
        type: 'POST_ADDED',
        id: id,
        post: post
    };
}

module.exports.postAdded = postAdded;

module.exports.addPost = function addPost(title, author, content) {
    return function addPostDispatch(dispatch) {
        var post = {
            title: title,
            author: author,
            content: content
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
    };
};

function postEdited(id, post) {
    return {
        type: 'POST_EDITED',
        id: id,
        post: post
    };
}

module.exports.postEdited = postEdited;

module.exports.editPost = function editPost(id, title, author, content) {
    return function editPostDispatch(dispatch) {
        var post = {
            id: id,
            title: title,
            author: author,
            content: content
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
    };
};

function postDeleted(id) {
    return {
        type: 'POST_DELETED',
        id: id
    };
}

module.exports.postDeleted = postDeleted;

module.exports.deletePost = function deletePost(id) {
    return function editPostDispatch(dispatch) {
        dispatch({
            type: 'DELETING_POST',
            id: id
        });
        sendJson({
            method: 'DELETE',
            url: '/api/delete_post',
            data: {
                id: id
            },
            onSuccess: function onSuccess(response) {
                dispatch(postDeleted(id));
            },
            onFailure: function onFailure(response) {
                console.log(response);
            }
        });
    };
};

function editingPageInfo(newInfo) {
    return {
        type: 'EDITING_PAGE_INFO',
        info: newInfo
    };
}

function pageInfoEdited(newInfo) {
    return {
        type: 'PAGE_INFO_EDITED',
        info: newInfo
    };
}

module.exports.editPageInfo = function editPageInfo(newInfo) {
    return function (dispatch) {
        dispatch(editingPageInfo(newInfo));
        sendJson({
            method: 'PUT',
            url: '/api/edit_page_info',
            data: newInfo,
            onSuccess: function onSuccess(res) {
                dispatch(pageInfoEdited(res.pageInfo));
            },
            onFailure: console.error.bind(console)
        });
    };
};

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

"use strict";


function dateConditionalPlural(num, type) {
    if (num === 1) {
        return num + " " + type + " ago";
    } else {
        return num + " " + type + "s ago";
    }
}

function timeSince(ms) {
    var seconds = Math.floor((Date.now() - ms) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        return dateConditionalPlural(interval, 'year');
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return dateConditionalPlural(interval, 'month');
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return dateConditionalPlural(interval, 'day');
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return dateConditionalPlural(interval, 'hour');
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return dateConditionalPlural(interval, 'minute');
    }
    return dateConditionalPlural(Math.floor(seconds), 'second');
}

module.exports = timeSince;

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

"use strict";


function sendJson(_ref) {
    var method = _ref.method,
        url = _ref.url,
        data = _ref.data,
        onLoad = _ref.onLoad,
        onSuccess = _ref.onSuccess,
        onFailure = _ref.onFailure;

    if (!method || !url) {
        throw new Error('method and url are required');
        return;
    }
    var request = new XMLHttpRequest();
    request.open(method, url);
    request.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    var body = data ? JSON.stringify(data) : {};
    request.send(body);
    if (onLoad && (onSuccess || onFailure)) {
        console.warn('You cannot define at the sametime onLoad and onSuccess or onFailure.\n', 'Ignoring onSuccess and onFailure');
    }
    if (onLoad) {
        request.onload = onLoad.bind(null, request);
    } else {
        if (onSuccess || onFailure) {
            request.onload = function () {
                if (request.status === 200 && onSuccess) {
                    onSuccess(JSON.parse(request.responseText));
                } else if (onFailure) {
                    onFailure(JSON.parse(request.responseText));
                }
            };
        }
    }
}

module.exports = sendJson;

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(139);

/***/ }

},[331]);