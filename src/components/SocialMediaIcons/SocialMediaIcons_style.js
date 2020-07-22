import styled from "styled-components"

import { br_tablet } from "../../variables"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: ${br_tablet}) {
    justify-content: flex-start;
  }
`

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 50px;
  color: black;
  margin-right: 20px;

  transition: 300ms;

  :hover {
    color: ${props => props.hoverColor};
  }
`
