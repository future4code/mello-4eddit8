import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  justify-content: center;
`
export const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 300px;
  p {
    text-align: center;
  }
  h4 {
    text-align: center;
    width: inherit;
    background-color: lightblue;
  }
  div {
    display: flex;
    justify-content: space-around;
  }

`