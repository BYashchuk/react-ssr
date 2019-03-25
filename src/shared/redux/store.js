import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import initialAppState from './initialState'
import rootReducer from './containers/root/reducer'


const reducers = combineReducers({
    rootState: rootReducer
})

const middlewares = applyMiddleware(thunk)

export const store = createStore(reducers, initialAppState, composeWithDevTools(middlewares))

