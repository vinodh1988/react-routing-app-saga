const Quote=({author,quote,getNewQuote}:any)=>{
    return(
        
        <div className="Card" style={{width:"400px",margin:"30px",padding:"30px"}}>
            <h3>Quote</h3>
            {quote} - {author}
            <br/> <br/> <br/>
            <button onClick={getNewQuote} className="btn btn-primary"> get New Quote</button>
        </div>
    )
}

export default Quote