import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Container = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
`

export const StyledIcon = styled(FontAwesomeIcon)`
  font-size: ${props => props.iconSize};
  color: black;
  margin-right: ${props => (props.last ? "0px" : "20px")};

  transition: 300ms;

  :hover {
    color: ${props => props.hoverColor};
  }
`
