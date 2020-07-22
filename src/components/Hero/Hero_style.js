import styled from "styled-components"

import { br_tablet } from "../../variables"

export const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
`

export const Text = styled.div`
  color: black;
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 10vw;
    padding: 0;
    margin: 0;
    font-weight: 100;
  }
  h2 {
    text-transform: uppercase;
    font-size: 50px;
    font-weight: 100;
    margin-bottom: -20px;
  }

  @media (max-width: ${br_tablet}) {
    h1 {
      font-size: 75px;
      text-align: left;
    }
    h2 {
      text-align: left;
    }
  }
`
