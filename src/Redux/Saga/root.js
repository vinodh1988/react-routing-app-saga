
import {takeEvery} from 'redux-saga/effects'
import { quoteHandler } from './handlers'

export function* rootSaga(){
    yield takeEvery('READ_QUOTES',quoteHandler)
}

/**
 * takeEvery is a helper function which recieved the last executed 
 * actions' type and would redirect to function specified
 * 
 * */