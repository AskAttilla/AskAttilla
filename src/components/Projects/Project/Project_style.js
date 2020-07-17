import styled from "styled-components"

export const Container = styled.div`
  margin: 24px;
  width: 100%;
  a {
    text-decoration: none;
    color: black;
  }
  h1 {
    font-size: 40px;
    padding: 0;
    font-weight: 100;
    margin: 0;
    margin: 0 auto;
    text-align: center;
    text-transform: uppercase;
  }
`

export const ImageContainer = styled.div`
  height: 50vh;
  width: 100%;
  filter: grayscale(1);
  transition: 600ms ease-in-out;

  :hover {
    filter: none;
  }
`
