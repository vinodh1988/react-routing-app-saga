
export const quoteReducer=(state={quote:"NA", author:"NA"},action)=>{
    switch(action.type){
        case "QUOTE_ACTION":
               return {quote: action.data.quote,author: action.data.author}
        default:
               return state
    }
}