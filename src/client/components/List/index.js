import React from 'react'
import pt from 'prop-types'

import Ul from './Ul'
import Li from './Li'
import Button from './Button'
import Wrapper from './Wrapper'


const List = ({
  items,
  selectedItemId,
  onSelectItem,
}) =>
  <Wrapper>
    <Ul>
      {items.map(item =>
        <Li
          key={item.id}
        >
          <Button
            onClick={() => onSelectItem(item)}
            isSelected={item.id === selectedItemId}
          >
            {item.name}
          </Button>
        </Li>)}
    </Ul>
  </Wrapper>

List.propTypes = {
  items: pt.arrayOf(pt.shape({ id: pt.string, name: pt.string })).isRequired,
  selectedItemId: pt.string,
  onSelectItem: pt.func.isRequired,
}

List.defaultProps = {
  selectedItemId: undefined,
}


export default List
