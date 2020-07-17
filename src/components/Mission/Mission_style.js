import styled from "styled-components"

import { br_mobile, br_tablet } from "../../variables"
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 64px 0;

  h1 {
    text-align: center;
    font-size: 64px;
    font-weight: 400;
    span {
      color: teal;
      font-style: italic;
    }

    @media (max-width: ${br_tablet}) {
      font-size: 48px;
    }
    @media (max-width: ${br_mobile}) {
      font-size: 28px;
    }
  }
`
