import React from 'react'
import currencies from '../supported-currencies'
import { SelectContainer, SelectHeading } from './StyledComponents'

const CurrencySelector = ({currency,handleCurrencyChange}) => {
  return (
    <SelectContainer >
          <SelectHeading>Select your Currency</SelectHeading>
          <select value ={currency} onChange={(event) => handleCurrencyChange(event.target.value)}>
          {currencies.map((obj,index) => {
            return <option key = {`${index}-${obj.country}`} value ={obj.currency}>{obj.country}</option>
          })}
          </select>
    </SelectContainer>
  )
}

export default CurrencySelector