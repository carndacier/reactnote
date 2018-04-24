import { createStore, combineReducers, applyMiddleware } from 'redux'
import noteReducer from './reducers/note.reducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  noteReducer
})

const store = createStore(
 reducer,
 applyMiddleware(thunk)
)

export default store;
