import React from 'react'
import GatsbyImg from 'gatsby-image'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

const Background = ({ style }) => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { eq: "images/page_background_start.png"}) {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={({ image }) => (
      <GatsbyImg
        imgStyle={{
          objectPosition: 'bottom'
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          ...style
        }}
        alt='Background'
        fluid={image.childImageSharp.fluid}
      />
    )}
  />
)

Background.propTypes = {
  style: PropTypes.object
}

export default Background
