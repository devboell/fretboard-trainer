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

// ReactModal.setAppElement('#main')
if (process.env.NODE_ENV !== 'test') ReactModal.setAppElement('#main')

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
    top: 40px;
    left: 5%;
    right: 5%;
    bottom: 10%;
    border: 1px solid #ccc;
    background-color: white;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 4px;
    outline: none;
  }
`

export default StyledModal
