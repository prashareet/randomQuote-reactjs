import { useState } from 'react'


import './App.css'

function App() {
  
  const [randomQuote, setRandomQuote] = useState({
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison, type.fit"
  },)

  function randomQuoteGenerator(){
    //Task 1: fetch the api in json format 

    fetch("https://type.fit/api/quotes")
    .then((data)=>{
      return data.json()
    })
    .then((data)=>{
      const quotesArray = data;
      //Generate the random object

      const randomNumber = Math.floor(Math.random() * quotesArray.length)
      const randomObject = quotesArray[randomNumber];
      setRandomQuote(randomObject)
    })

  }
  return (
    <>
      
      <h2>
        {randomQuote.text}
      </h2>
      <p >By - {randomQuote.author}</p>

      <button onClick={()=>{
        randomQuoteGenerator()
      }}>Generate</button>
    </>
  )
}

export default App
