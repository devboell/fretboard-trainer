import React from 'react'
// import pt from 'prop-types'
import 'matchmedia-polyfill'
import Fullscreen from 'react-fullscreen-crossbrowser'
import StyledModal from './StyledModal'

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
        <div>
          <Fullscreen
            enabled={isFullscreenEnabled}
            onChange={flag => this.setState({ isFullscreenEnabled: flag })}
          >
            <StyledModal isOpen={!isFullscreenEnabled}>
              <Component
                {...{ ...this.props }}
                handleExitFullscreen={this.handleExitFullscreen}
                isFullscreenEnabled={isFullscreenEnabled}
              />
            </StyledModal>
          </Fullscreen>
        </div>
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

