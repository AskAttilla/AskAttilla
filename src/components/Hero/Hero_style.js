import styled from "styled-components"

import { br_mobile, br_tablet } from "../../utils/variables"

export const SectionContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 1280px;
  padding-left: 7.5vw;
  display: flex;
  align-items: center;
`

export const TextContainer = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Text = styled.div`
  color: black;
  text-align: left;
  margin-bottom: 100px;
  text-transform: uppercase;

  h1 {
    font-size: 100px;
    padding-bottom: 50px;
    margin: 0;
  }
  h2 {
    font-size: 50px;
  }

  h1,
  h2 {
    font-weight: 100;
  }

  @media (max-width: ${br_tablet}) {
    margin-bottom: 50px;
    h1 {
      font-size: 70px;
    }
    h2 {
      font-size: 30px;
    }
  }
  @media (max-width: ${br_mobile}) {
    h1 {
      font-size: 40px;
    }
    h2 {
      display: 20px;
    }
  }
`

export const Underlay = styled.div`
  width: 100%;
  height: 100px;
  border: 5px orange dashed;
  margin: 0;
  padding: 0;
  margin-top: -90px;
  margin-left: 5vw;

  @media (max-width: ${br_tablet}) {
    height: 70px;
    margin-top: -80px;
  }
  @media (max-width: ${br_mobile}) {
    height: 40px;
    margin-top: -70px;
  }
`

export const ImageContainer = styled.div`
  height: fit-content;
  width: 50vh;
  position: absolute;
  right: 0;
  margin-right: 10vw;
  z-index: -1;
  bottom: 0;
  filter: grayscale(1);
  opacity: 0.5;
  transform: scaleX(-1);
  overflow: hidden;
`
