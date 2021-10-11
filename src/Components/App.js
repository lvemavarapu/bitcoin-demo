import React, {useState,useEffect}from 'react'
import CurrencySelector from './CurrencySelector'
import DataDisplay from './DataDisplay'
import {AppContainer,Heading}  from './StyledComponents'

const App = () => {

  const defaultCurrency = "AUD"
  const[currency,setCurrency]= useState(defaultCurrency)
  const[bitcoinData,setBitcoinData] = useState({})

  // const bitcoinApi = "https://api.coindesk.com/v1/bpi/historical/close.json"

  useEffect(()=>{
  console.log("Fetch API will run ")
  
  function getData(){

    fetch(`${"https://api.coindesk.com/v1/bpi/historical/close.json"}?currency=${currency}`)
    .then(response =>response.json())
    .then(data => setBitcoinData(data.bpi))
    .catch(e => e)
  }
  getData()
},[currency])
  
  function currencyChangeHandler(currency){
    console.log("currency:",currency)
    setCurrency(currency)
  

  }
  return (
    <AppContainer>
       <Heading> Bitcoin Data</Heading>
       <CurrencySelector currency={currency} handleCurrencyChange={currencyChangeHandler}/>
       <DataDisplay  data = {bitcoinData}/>
    </AppContainer>
  )
}

export default App
