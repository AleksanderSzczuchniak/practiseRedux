import { createStore, combineReducers } from 'redux'
import counterReducer, { incAction, decAction } from './state/counter'

const reducer = combineReducers({
  counterReducerName: counterReducer
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.dispatchIncAction = () => store.dispatch(incAction())
window.dispatchDecAction = () => store.dispatch(decAction())