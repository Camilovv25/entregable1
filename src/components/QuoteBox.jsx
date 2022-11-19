import QuoteButton from "./QuoteButton"
const QuoteBox = ({ quote, getNewValues, backgroundObject, colorObject }) => {

    return (
        <article className="quote-box">
            <section className="quote-item">
                <i className='bx bxs-quote-left' style={colorObject}></i>
                <p style={colorObject}>{quote.quote}</p>
            </section>

            <h4 style={colorObject}>{quote.author}</h4>

            <section className="button-object">
                <QuoteButton getNewValues={getNewValues} backgroundObject={backgroundObject} />
            </section>

        </article>
    )
}

export default QuoteBox