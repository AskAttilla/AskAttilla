import styled from "styled-components"

import { br_tablet, br_mobile } from "../../variables"

export const Section = styled.section`
  width: 100%;
  background: ${props => props.backgroundColor || "whitesmoke"};
  display: flex;
  justify-content: center;
`

export const InnerSection = styled.div`
  width: 100%;
  max-width: 1280px;
  position: relative;
  padding: 64px 10vw;
  margin: 0;
  padding: 64px;
  display: flex;
  align-items: center;

  @media (max-width: ${br_tablet}) {
    width: 90%;
    padding: 50px 5vw;
  }
  @media (max-width: ${br_mobile}) {
    width: 95%;
  }
`

// Title

export const TitleCover = styled.div`
  width: fit-content;
  margin-top: -50px;
  margin-bottom: 100px;
  ::before {
    content: "";
    display: block;
    background: orange;
    height: 50px;
    transform: translate(30px, 75px);
    mix-blend-mode: multiply;
  }

  @media (max-width: ${br_tablet}) {
    margin-bottom: 50px;
  }
`

export const Title = styled.h1`
  font-size: 50px;
  text-align: left;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  font-weight: 100;
  padding-bottom: 15px;
`
