import axios from "axios";
import {call,put} from 'redux-saga/effects'
function getQuote(url){
    return axios.get(url)
}
/**
 * helper 1
 * 
 * According to redux saga if you want to call any function that returns promise with
 * you need to call it only with yield and the function has to be passed
 * as a paramter to a helper function call Call
 * 
 * Helper 2
 * 
 * If at all you want to return action type and data dont return it directly from
 * 
 * yield it using put method, then only it ll be passed to reducer
 * 
 * */
export function* quoteHandler(){
    
 try{
     const result = yield call(getQuote,"https://api.quotable.io/random")
      yield put({
      type:"QUOTE_ACTION",
      data:{quote: result.data.content,author: result.data.author}
      })
   }
   catch(e){
    yield put({})
   } 
}