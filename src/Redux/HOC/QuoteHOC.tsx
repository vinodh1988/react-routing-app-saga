import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Quote from '../ReduxComponents/Quote'

export default connect((data:any)=>{
  return {
      quote: data.quoteData.quote,
      author: data.quoteData.author
  }
},(dispatch)=>{
    return bindActionCreators({getNewQuote: ()=>{
      return {type:"READ_QUOTES"}
    }},dispatch)
})(Quote)