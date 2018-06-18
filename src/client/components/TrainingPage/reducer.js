const MODAL_TOGGLE = 'MODAL_TOGGLE'

export const toggleModal = () => ({
  type: MODAL_TOGGLE,
})

const initialState = {
  showModal: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_TOGGLE:
      return { showModal: !state.showModal }
    default:
      return state
  }
}
