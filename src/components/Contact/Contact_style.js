import styled from "styled-components"

import { br_mobile, br_tablet } from "../../utils/variables"
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  h1 {
    text-align: center;
    font-size: 45px;
    font-weight: 100;

    a {
      margin-top: 10px;
      text-decoration: none;
      color: orange;
      :hover {
        color: darkorange;
      }
    }

    @media (max-width: ${br_tablet}) {
      font-size: 30px;
    }
    @media (max-width: ${br_mobile}) {
      font-size: 20px;
    }
  }
`
