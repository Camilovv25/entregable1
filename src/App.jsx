import quoteDB from "./db/quotes.json"
import QuoteBox from "./components/QuoteBox"
import { useState } from "react"
import colors from "./db/colors"


function App() {
  // funcion para obtener elemento al azar
  const getRandom = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
  }

  //useStates para el cambio de frase y de color
  const [quote, setQuote] = useState(getRandom(quoteDB))
  const [color, setColor] = useState(getRandom(colors))

  //funcion para asignarle estado al usestate
  const getNewValues = () => {
    const newQuote = getRandom(quoteDB)
    const newColor = getRandom(colors)
    setQuote(newQuote)
    setColor(newColor)
  }

  const backgroundObject = {
    backgroundColor: color
  }
  const colorObject = {
    color: color
  }


  return (
    <div className="App " style={backgroundObject}>
      <QuoteBox
        quote={quote}
        getNewValues={getNewValues}
        backgroundObject={backgroundObject}
        colorObject={colorObject} />
    </div>
  )
}

export default App
