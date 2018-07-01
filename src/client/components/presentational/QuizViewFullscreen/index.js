import React from 'react'
import Fullscreen from 'react-fullscreen-crossbrowser'

export default (Component) => {
  class WrappingComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        isFullscreenEnabled: false,
      }
      this.handleExitFullscreen = this.handleExitFullscreen.bind(this)
    }

    /* eslint-disable react/no-did-mount-set-state */
    componentDidMount() {
      if (matchMedia('only screen and (max-width: 480px)').matches) {
        this.setState({ isFullscreenEnabled: true })
      }
    }

    handleExitFullscreen() {
      this.setState({ isFullscreenEnabled: false })
    }

    render() {
      const { isFullscreenEnabled } = this.state
      return (
        <Fullscreen
          enabled={isFullscreenEnabled}
          onChange={flag => this.setState({ isFullscreenEnabled: flag })}
        >
          <Component
            handleExitFullscreen={this.handleExitFullscreen}
            isFullscreenEnabled={isFullscreenEnabled}
          />
        </Fullscreen>
      )
    }
  }

  WrappingComponent.propTypes = {
    // shouldBeFullscreen: pt.bool,
  }

  WrappingComponent.defaultProps = {
    // shouldBeFullscreen: false,
  }

  return WrappingComponent
}

