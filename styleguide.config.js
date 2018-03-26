const path = require('path')

module.exports = {
  components: 'src/client/components/Fretboard/Neck/Position/Fret/**/*.js',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/client/styleguide/ThemeWrapper'),
  },
  skipComponentsWithoutExample: true,
  getExampleFilename(componentPath) {
    return componentPath.replace(/index\.jsx?$/, 'Readme.md')
  },
}
