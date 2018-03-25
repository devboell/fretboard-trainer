const path = require('path')

module.exports = {
  // components: 'src/client/components/**/*.js',
  components: 'src/client/components/Fretboard/Position/Fret/**/*.js',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/client/styleguide/ThemeWrapper'),
  },
  skipComponentsWithoutExample: true,
}
