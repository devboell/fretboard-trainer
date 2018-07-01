import React from 'react'
import pt from 'prop-types'

import Wrapper from './Wrapper'
import DropDown from './DropDown'
import DropDownItem from './DropDownItem'


const DropDownButton = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
    this.toggleOpen = this.toggleOpen.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
  }

  toggleOpen() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  handleSelection(item) {
    const { clickAction } = this.props
    this.setState({ isOpen: false })
    clickAction(item)
  }

  render() {
    const { items, children, className } = this.props

    return (
      <Wrapper
        onMouseEnter={() => this.toggleOpen()}
        onMouseLeave={() => this.toggleOpen()}
        className={className}
      >
        {children}
        {this.state.isOpen &&
          <DropDown>
            {items.map(item =>
              <DropDownItem
                key={`drop-${item}`}
                onClick={() => this.handleSelection(item)}
              >
                {item}
              </DropDownItem>)
            }
          </DropDown>
        }
      </Wrapper>
    )
  }
}


DropDownButton.propTypes = {
  children: pt.node.isRequired,
  items: pt.arrayOf(pt.string).isRequired,
  clickAction: pt.func.isRequired,
  className: pt.string.isRequired,
}

export default DropDownButton
