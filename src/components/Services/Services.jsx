import React from "react"

import * as style from "./Services_style"

import Section from "../Section"
import SectionTitle from "../Section/SectionTitle"
import Service from "./Service"

// Icons
import {
  faEye,
  faPencilRuler,
  faShippingFast,
  faArrowsAlt,
  faUserCheck,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons"

const Services = () => {
  return (
    <Section backgroundColor="white">
      <div>
        <SectionTitle>Kvaliteter</SectionTitle>
        <style.servicesGrid>
          <Service
            title="Synlig"
            content="Integrasjon med sosiale medier og høy score hos søkemotorer gjør nettsiden synlig for kunder. En nettside fra meg vil være optimalisert for dette."
            icon={faEye}
          />
          <Service
            title="Responsiv"
            content="En nettside kan besøkes fra flere enheter med forskjellige skjermer, og derfor er det viktig at nettsiden er tilpasset dette."
            icon={faArrowsAlt}
          />
          <Service
            title="Sikker"
            content="Det er essensielt at nettsiden er sikker. Nettsiden kommer med ferdiginstallert sikkerhetssertfikat"
            icon={faUnlockAlt}
          />
          <Service
            title="Skreddersydd"
            content="Nettsiden har et skreddersydd design, tilpasset ditt behov"
            icon={faPencilRuler}
          />
          <Service
            title="Brukervennlig"
            content=" Ved hjelp av WordPress er det enkelt å holde nettsiden aktiv."
            icon={faUserCheck}
          />
          <Service
            title="Rask"
            content="En nettside behøver å være rask og effektiv for å beholde kunders oppmerksomhet."
            icon={faShippingFast}
          />
        </style.servicesGrid>
      </div>
    </Section>
  )
}

export default Services
