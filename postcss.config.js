var postCSSConfig = [
/* reset inherited rules */
require('postcss-initial')({
  reset: 'inherited' // reset only inherited rules
}),
/* enable css @imports like Sass/Less */
require('postcss-import'),
/* enable mixins like Sass/Less */
require('postcss-mixins')({
  mixins: require('./config/src/mixins')
}),
/* enable nested css selectors like Sass/Less */
require('postcss-nested'),
/* lost grid system */
require('lost'),
/* require global variables */
require('postcss-simple-vars')({
  variables: function variables() {
    return require('./config/src/variables')
  },
  unknown: function unknown(node, name, result) {
    node.warn(result, 'Unknown variable ' + name)
  }
}),
/* Future css now */
require('postcss-cssnext'),
/* PostCSS plugin for making calculations with math.js  */
require('postcss-math'),
/* transform W3C CSS color function to more compatible CSS. */
require('postcss-color-function')
]

// Export the PostCSS Config for usage in webpack
module.exports = postCSSConfig;