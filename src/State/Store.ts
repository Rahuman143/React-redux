// import {createStore, applyMiddleware } from "redux"
import { legacy_createStore as createStore ,  applyMiddleware} from 'redux'
import reducers from './Reducer/index'
import thunk from "redux-thunk"

export const store = createStore(
    reducers,{},applyMiddleware(thunk)
)