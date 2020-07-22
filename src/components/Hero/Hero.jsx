import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as style from "./Hero_style"

import SocialMediaIcons from "../SocialMediaIcons"

const Hero = () => {
  /* const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "dress.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `) */

  return (
    <style.SectionContainer>
      <style.TextContainer>
        <style.Text>
          <h2>Ask Attilla</h2>
          <h1>Webutvikler</h1>
          <style.Underlay />
        </style.Text>
        <SocialMediaIcons jc="left" iconSize="50px" />
      </style.TextContainer>
      {/*  <style.ImageContainer>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          objectFit="contain"
        />
      </style.ImageContainer> */}
    </style.SectionContainer>
  )
}

export default Hero
