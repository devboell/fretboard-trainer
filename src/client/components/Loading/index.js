import React from 'react'
import pt from 'prop-types'


export default (Component) => {
  const WrappingComponent = ({
    loading,
    error,
    ...other
  }) => {
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    return (
      <Component
        {...other}
      />
    )
  }

  WrappingComponent.propTypes = {
    loading: pt.bool.isRequired,
    error: pt.shape({}),
  }

  WrappingComponent.defaultProps = {
    error: undefined,
  }

  return WrappingComponent
}
