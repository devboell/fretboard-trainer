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
    // this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  toggleOpen() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    const { items, clickAction } = this.props

    return (
      <Wrapper
        onMouseEnter={() => this.toggleOpen()}
        onMouseLeave={() => this.toggleOpen()}
      >
        {this.state.isOpen &&
          <DropDown>
            {items.map(item =>
              <DropDownItem
                onClick={() => clickAction(item)}
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
  items: pt.arrayOf(pt.string).isRequired,
  clickAction: pt.func.isRequired,
}

export default DropDownButton
