const INC = 'counter/INC'
const DEC = 'counter/DEC'

export const incAction = () => ({
  type: INC
})
export const decAction = () => ({
  type: DEC
})

const C_INITIAL_STATE = {
  counter: 0
}

export default (state = C_INITIAL_STATE, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DEC:
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state
  }
}
