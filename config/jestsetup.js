import 'babel-polyfill'
import 'raf/polyfill'

import { shallow, render, mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16' // eslint-disable-line import/no-extraneous-dependencies
import ReactModal from 'react-modal'

configure({ adapter: new Adapter() })

// for ReactModal
const mainDiv = document.createElement('div')
mainDiv.setAttribute('id', 'main')
ReactModal.setAppElement(mainDiv)

global.shallow = shallow
global.render = render
global.mount = mount

global.setUpData = (knex) => {
  beforeEach(async () => {
    await knex.migrate.rollback()
    await knex.migrate.latest()
    await knex.seed.run()
  })

  afterEach(async () => {
    await knex.migrate.rollback()
  })

  afterAll(() => {
    knex.destroy()
  })
}
