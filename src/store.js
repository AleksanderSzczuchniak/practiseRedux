import { createStore, combineReducers } from 'redux'
import counterReducer, { incAction, decAction } from './state/counter'
import toDo, {
    newTaskAction,
    addNewTaskAction,
    filterAllTasksAction,
    filterCompletedTasksAction,
    filterUncompletedTasksAction
} from './state/toDo'

const reducer = combineReducers({
    toDo,
  counterReducerName: counterReducer
})

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.dispatchIncAction = () => store.dispatch(incAction())
window.dispatchDecAction = () => store.dispatch(decAction())

window.newTaskAction = text => store.dispatch(newTaskAction(text))
window.addNewTaskAction = () => store.dispatch(addNewTaskAction())
window.filterAllTasksAction = () => store.dispatch(filterAllTasksAction())
window.filterCompletedTasksAction = () => store.dispatch(filterCompletedTasksAction())
window.filterUncompletedTasksAction = () => store.dispatch(filterUncompletedTasksAction())