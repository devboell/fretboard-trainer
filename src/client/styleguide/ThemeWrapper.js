import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
// import theme from 'themes/fretboard-theme'

const tmpTheme = {}
/* eslint-disable react/prefer-stateless-function, react/prop-types */
export default class ThemeWrapper extends Component {
  render() {
    return (
      <ThemeProvider theme={tmpTheme}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}
