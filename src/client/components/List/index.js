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
      {items.map(({ id, name }) =>
        <Li
          key={id}
        >
          <Button
            onClick={() => onSelectItem(id)}
            isSelected={id === selectedItemId}
          >
            {name}
          </Button>
        </Li>)}
    </Ul>
  </Wrapper>

List.propTypes = {
  items: pt.arrayOf(pt.shape({ id: pt.string, name: pt.string })).isRequired,
  selectedItemId: pt.string.isRequired,
  onSelectItem: pt.func.isRequired,
}


export default List
