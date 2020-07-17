import styled from "styled-components"

import { br_tablet, br_mobile } from "../../variables"

export const Section = styled.section`
  width: 100%;
  min-height: 60vh;
  background: ${props => props.backgroundColor || "whitesmoke"};
  display: flex;
  justify-content: center;
`

export const InnerSection = styled.div`
  width: 80%;
  max-width: 1280px;
  position: relative;
  padding: 64px 0;

  @media (max-width: ${br_tablet}) {
    width: 90%;
  }
  @media (max-width: ${br_mobile}) {
    width: 95%;
  }
`

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 100;
  border-bottom: 1px solid black;
  padding-bottom: 15px;
  width: 50%;
  margin: 0 auto 50px auto;
`
