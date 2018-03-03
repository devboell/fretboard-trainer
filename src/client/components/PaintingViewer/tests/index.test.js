import React from 'react'
import PaintingViewer from '../index'

const props = {
  match: {
    params: {
      artisPath: 'testUrl',
    },
  },
}

it('PaintingViewer component snapshot', () => {
  const wrapper = shallow(
    <PaintingViewer {...props} />,
  )
  expect(wrapper).toMatchSnapshot()
})
