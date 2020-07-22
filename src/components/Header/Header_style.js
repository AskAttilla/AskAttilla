import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10vw;
  z-index: 50;
`

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 50px;
  margin-top: 10px;
  transition: 300ms;

  :hover {
    color: orange;
  }
`
