import styled from "styled-components"

import { br_mobile } from "../../variables"

export const Wrapper = styled.div`
  width: 100%;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: 1fr;

  grid-gap: 2vw;

  @media (max-width: ${br_mobile}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`
