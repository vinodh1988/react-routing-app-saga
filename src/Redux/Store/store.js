import { applyMiddleware, combineReducers, createStore } from "redux";
import { quoteReducer } from "../Reducers/reducer";

import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../Saga/root'

const appState=combineReducers({
    quoteData: quoteReducer
})

const sagaMiddleware=createSagaMiddleware()
export const store =createStore(appState,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
store.dispatch({type:"READ_QUOTES"})


