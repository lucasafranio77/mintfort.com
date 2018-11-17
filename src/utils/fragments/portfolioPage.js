import { graphql } from "gatsby"

export const PortfolioPage = graphql`
  fragment PortfolioPage on ContentfulPage {
    hero {
      ...Hero
      image {
        fluid(maxWidth: 600) {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
    sections {
      ...Section
      images {
        fluid(maxWidth: 825) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    boxSection {
      header
      boxes {
        header
        link
        image {
          fluid(maxWidth: 540) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`
