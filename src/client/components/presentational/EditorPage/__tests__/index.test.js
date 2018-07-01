import React from 'react'

import EditorPage from '../index'


it('EditorPage component, snapshot', () => {
  const wrapper = shallow(<EditorPage />)
  expect(wrapper).toMatchSnapshot()
})
