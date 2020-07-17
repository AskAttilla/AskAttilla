import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { br_mobile, br_tablet } from "../../../variables"

export const Container = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  h3 {
    margin-top: 16px;
    margin-bottom: 8px;
    text-transform: uppercase;
    font-weight: 400;
  }
  p {
    text-align: left;
  }

  @media (max-width: ${br_tablet}) {
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
  @media (max-width: ${br_mobile}) {
    h3 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }
`

export const StyledIcon = styled(FontAwesomeIcon)`
  color: teal;
  font-size: 64px;
  @media (max-width: ${br_tablet}) {
    font-size: 48px;
  }
  @media (max-width: ${br_tablet}) {
    font-size: 32px;
  }
`
