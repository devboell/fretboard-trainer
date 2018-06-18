import React from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal'

/* eslint-disable react/prop-types */
const ReactModalAdapter = ({ className, ...props }) => {
  const contentClassName = `${className}__content`
  const overlayClassName = `${className}__overlay`
  return (
    <ReactModal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      {...props}
    />
  )
}

const StyledModal = styled(ReactModalAdapter)`

  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(255, 255, 255, 0.75);
  }

  &__content {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    background: darkseagreen;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 4px;
    outline: none;
  }
`
export default StyledModal
