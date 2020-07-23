import styled from "styled-components"

import { br_mobile, br_tablet, br_desktop } from "../../utils/variables"

export const SectionContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  @media (max-width: ${br_mobile}) {
    align-items: flex-end;
    justify-content: center;
  }
  overflow: hidden;
`

export const TextContainer = styled.div`
  margin-top: 50px;
  height: 100%;
  padding: 100px 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  clip-path: polygon(100% 25%, 100% 100%, 0 100%, 0 0);
  background: rgba(255, 255, 255, 0.95);

  @media (max-width: ${br_mobile}) {
    width: 100%;
    padding: 8vh 7.5vw;
    clip-path: none;
  }
  @media (min-width: ${br_desktop}) {
    background: none;
  }
`

export const Text = styled.div`
  color: black;
  text-align: left;
  margin-bottom: 50px;
  text-transform: uppercase;
  width: fit-content;

  h1 {
    font-size: 100px;
    padding-bottom: 30px;
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
    margin-bottom: 30px;
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
  margin-top: -80px;
  margin-left: 5vw;

  @media (max-width: ${br_tablet}) {
    height: 70px;
    margin-top: -65px;
  }
  @media (max-width: ${br_mobile}) {
    height: 40px;
    margin-top: -50px;
  }
`

export const ImageContainer = styled.div`
  width: 67vh;
  position: absolute;
  right: 0;
  z-index: -1;
  bottom: 0;
  filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.3)) grayscale(1);
  overflow: hidden;
  @media (min-width: ${br_desktop}) {
    right: 15vw;
  }
`
