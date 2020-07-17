import styled from "styled-components"

import { br_tablet } from "../../variables"

export const servicesGrid = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 64px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1vw;
  padding: 0 8px;

  @media (max-width: ${br_tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`
