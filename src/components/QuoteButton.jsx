
const QuoteButton = ({ getNewValues, backgroundObject }) => {
    return (
        <article className="button">
            <button onClick={getNewValues} style={backgroundObject}>
                <i className='bx bxs-chevron-right'></i>
            </button>
        </article>
    )
}

export default QuoteButton