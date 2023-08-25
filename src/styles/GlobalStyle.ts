import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }
`
export const colors = {
  menu1: "#A93545 ",
  menu2: "#E89A80",
  titulo: "#CC063E",
  texto: "#F9C593"
  
}

export const Main = styled.main`
  min-height: calc(100vh - 9rem);
`
