import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  a {
    text-decoration: none;
    color: black;
  }
  box-shadow: 10px 50px 50px -50px rgba(0, 0, 0, 0.5);
`

export const ImageContainer = styled.div`
  height: 100%;
  transition: 100ms;

  :hover {
    opacity: 0.8;
  }
`
