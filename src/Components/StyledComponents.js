import styled from 'styled-components'

export const AppContainer = styled.div`
    max-width: 800px;
    margin:0 auto;
    text-align:center;
    background-color:beige;
    border: 3px solid red;
`
export const Heading = styled.h1`
font-Size:28px;
font-Family:Garamond;
font-Color:red;
`
export const SelectHeading= styled.span`
font-Size:20px;
font-Family:'Bungee'
`

export const SelectContainer = styled.div `
select {
  padding: 1em;
  border: none;
  box-shadow: none;
  background: transparent;
  -webkit-appearance: none;
  font-family: 'Bungee', cursive;
  color: #ff1769;
  font-size: 1em;
  max-width: 250px;
  white-space:nowrap;
  &:focus {
      outline: none;
  }
}
`