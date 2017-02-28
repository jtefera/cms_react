webpackJsonp([1],{

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var combineReducers = __webpack_require__(18).combineReducers;

var pageInfo = function pageInfo() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        author: null,
        title: 'Title'
    };
    var action = arguments[1];

    switch (action.type) {
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

    return state;
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

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var React = __webpack_require__(1);
var Layout = __webpack_require__(170);
var Home = __webpack_require__(168);
var Post = __webpack_require__(172);
var Author = __webpack_require__(166);
var About = __webpack_require__(164);

var _require = __webpack_require__(14),
    Router = _require.Router,
    Route = _require.Route,
    IndexRoute = _require.IndexRoute,
    browserHistory = _require.browserHistory;

var createElement = function createElement(Component, props) {
    // make sure you pass all the props in!
    return React.createElement(Component, props);
};
if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    createElement = function createElement(Component, props) {
        return React.createElement(Component, _extends({}, props, { custom: window.PROPS }));
    };
}
module.exports = React.createElement(
    Router,
    { history: browserHistory, createElement: createElement },
    React.createElement(
        Route,
        { path: '/', component: Layout },
        React.createElement(IndexRoute, { component: Home }),
        React.createElement(Route, { path: 'post/:postId', component: Post }),
        React.createElement(Route, { path: 'author/:authorId', component: Author }),
        React.createElement(Route, { path: 'about', component: About })
    )
);

/***/ },

/***/ 157:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(1);
var Link = __webpack_require__(14).Link;
var styles = __webpack_require__(176);

var Header = function Header(props) {
    console.log('header', styles);
    return React.createElement(
        'header',
        null,
        React.createElement(
            'nav',
            { className: styles.menu },
            React.createElement(
                'li',
                { className: styles.menu_li },
                React.createElement(
                    Link,
                    { to: '/' },
                    'Home'
                )
            ),
            React.createElement(
                'li',
                { className: styles.menu_li },
                React.createElement(
                    Link,
                    { to: 'about' },
                    'About'
                )
            )
        )
    );
};

module.exports = Header;

/***/ },

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(157);

/***/ },

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(1);

var Page = function Page(_ref) {
    var title = _ref.title,
        children = _ref.children;

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            null,
            title
        ),
        children
    );
};

module.exports = Page;

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(159);

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(1);
var Link = __webpack_require__(14).Link;
var style = __webpack_require__(177);
var dateFormatter = __webpack_require__(50);
var Post = function Post(_ref) {
    var title = _ref.title,
        author = _ref.author,
        authorId = _ref.authorId,
        date = _ref.date,
        content = _ref.content,
        id = _ref.id;

    var authorEl = author ? React.createElement(
        Link,
        { to: 'author/' + authorId },
        author
    ) : 'Anonymous';
    return React.createElement(
        'div',
        { className: style.Post },
        React.createElement(
            'div',
            null,
            React.createElement(
                'h4',
                { className: style.title },
                React.createElement(
                    Link,
                    { to: 'post/' + id },
                    title || 'Missing Post Title'
                )
            ),
            React.createElement(
                'h6',
                { className: style.subtitle },
                authorEl,
                ' ',
                dateFormatter(date) || ''
            ),
            React.createElement(
                'p',
                null,
                content
            )
        )
    );
};

Post.propTypes = {
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    authorId: React.PropTypes.string.isRequired,
    date: React.PropTypes.number.isRequired,
    content: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired
};

module.exports = Post;

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(12);
var connect = __webpack_require__(7).connect;
var Post = __webpack_require__(85);

var Posts = function Posts(_ref) {
    var posts = _ref.posts;

    var postElems = posts.map(function (post) {
        return React.createElement(Post, _extends({}, post, { key: post.date + post.title }));
    });
    return React.createElement(
        'div',
        null,
        postElems
    );
};

Posts.propTypes = {
    posts: React.PropTypes.array
};

module.exports = Posts;

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(1);
var Page = __webpack_require__(160);

var _require = __webpack_require__(7),
    connect = _require.connect;

var About = function About(props) {
    return React.createElement(
        Page,
        { title: 'About' },
        'Hello! This is the About page'
    );
};

module.exports = About;

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(163);

/***/ },

/***/ 165:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(12);
var connect = __webpack_require__(7).connect;
var PostsList = __webpack_require__(86);

var AuthorPage = function AuthorPage(_ref) {
    var authorName = _ref.authorName,
        posts = _ref.posts;

    return React.createElement(
        'div',
        null,
        'Posts by ',
        authorName,
        React.createElement(PostsList, { posts: posts })
    );
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        posts: Object.keys(state.posts).map(function (key) {
            return state.posts[key];
        }).filter(function (post) {
            return post.authorId === ownProps.params.authorId;
        }),
        authorName: state.authors[ownProps.params.authorId].name
    };
};
var wrapper = connect(mapStateToProps, null);
module.exports = wrapper(AuthorPage);

/***/ },

/***/ 166:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(165);

/***/ },

/***/ 167:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(12);
var connect = __webpack_require__(7).connect;
var PostsList = __webpack_require__(86);

var Home = function Home(_ref) {
    var posts = _ref.posts;

    return React.createElement(
        'div',
        null,
        'You are in the Home Page!',
        React.createElement(PostsList, { posts: posts })
    );
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        posts: Object.keys(state.posts).sort().reverse().map(function (key) {
            return state.posts[key];
        })
    };
};
var wrapper = connect(mapStateToProps, null);
module.exports = wrapper(Home);

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(167);

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(1);
var Link = __webpack_require__(14).Link;
var connect = __webpack_require__(7).connect;
var path = __webpack_require__(208);
var Header = __webpack_require__(158);
var style = __webpack_require__(178);
var Index = function Index(props) {
    var customProps = props.custom;
    return React.createElement(
        'html',
        null,
        React.createElement(
            'head',
            null,
            React.createElement(
                'title',
                null,
                customProps.pageInfo.title
            ),
            React.createElement('link', {
                rel: 'stylesheet',
                href: '/css/style.css'
            })
        ),
        React.createElement(
            'body',
            { className: style.body },
            React.createElement(
                'div',
                { className: style.container },
                React.createElement(Header, null),
                React.createElement(
                    'div',
                    { id: 'main' },
                    props.children
                )
            ),
            React.createElement('script', { dangerouslySetInnerHTML: {
                    __html: 'window.PROPS=' + JSON.stringify(customProps)
                } }),
            React.createElement('script', { type: 'text/javascript', src: '/js/vendor/index.js' }),
            React.createElement('script', { type: 'text/javascript', src: '/js/index.js' })
        )
    );
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        custom: state
    };
};

var wrapper = connect(mapStateToProps, null);

module.exports = wrapper(Index);

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(169);

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(12);
var connect = __webpack_require__(7).connect;
var Post = __webpack_require__(85);
var mapStateToProps = function mapStateToProps(state, ownProps) {
    return _extends({}, state.posts[ownProps.params.postId]);
};
var wrapper = connect(mapStateToProps);

module.exports = wrapper(Post);

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(171);

/***/ },

/***/ 176:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"menu_li":"style__menu_li___1pvKn","menuLi":"style__menu_li___1pvKn","menu":"style__menu___1AjLq"};

/***/ },

/***/ 177:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Post":"style__Post___3gRrj","post":"style__Post___3gRrj","title":"style__title___OWEJ4","subtitle":"style__subtitle___1gWpu"};

/***/ },

/***/ 178:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"body":"style__body___3ZGku","container":"style__container___1tlju"};

/***/ },

/***/ 208:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(12);
var pageRouter = __webpack_require__(138);
var Provider = __webpack_require__(7).Provider;

var _require = __webpack_require__(18),
    createStore = _require.createStore,
    applyMiddleware = _require.applyMiddleware,
    compose = _require.compose;

var reducer = __webpack_require__(137);
var thunkMiddleware = __webpack_require__(35).default;
var store = createStore(reducer, window.PROPS, compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
var injectTapEventPlugin = __webpack_require__(49);
injectTapEventPlugin();

ReactDOM.render(React.createElement(
    Provider,
    { store: store },
    pageRouter
), document);

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

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(161);

/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(162);

/***/ }

},[333]);