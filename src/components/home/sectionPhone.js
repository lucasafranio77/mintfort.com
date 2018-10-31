import React from 'react'
import PropTypes from 'prop-types'
import GatsbyImg from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import Fade from 'react-reveal/Fade'

import { addWindowWidth } from 'utils/context/windowWidth'

import DividerEnd from 'components/backgrounds/end'
import { flex, phone, mobile, rem, screenBreak } from 'library/utils'

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.gray};
  overflow: hidden;
  width: 100%;
  overflow-x: hidden;:

  padding-bottom: ${rem(20)};

  ${phone(css`
    padding: ${rem(20)} ${rem(60)} ${rem(60)}
  `)}
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: ${rem(20)} 0;

  ${flex}

  ${phone(css`
    padding: 0;
  `)}
`

const PhoneWrapper = styled.div`
  width: ${rem(650)};

  ${mobile(css`
    max-width: ${rem(500)};
  `)}

  ${phone(css`
    max-width: ${rem(400)};
  `)}

  @media (max-width: ${460 / 16}em) {
    max-width: ${rem(280)};
  }
`
const Phone = ({ windowWidth, images: { big, small } } ) => (
  <PhoneWrapper>
    <GatsbyImg
      style={{
        width: "100%"
      }}
      alt='Mintfort Crypto Phone'
      title='Mintfort Crypto Phone'
      fluid={
        windowWidth > screenBreak.phone ?
          big.childImageSharp.fluid :
          small.childImageSharp.fluid
      }
    />
  </PhoneWrapper>
)


Phone.propTypes = {
  windowWidth: PropTypes.number.isRequired,
  images: PropTypes.shape({
    big: PropTypes.object,
    small: PropTypes.object
  }).isRequired
}

const SectionPhone = ({ windowWidth }) => (
  <StaticQuery
    query={query}
    render={({ big, small }) => (
      <Wrapper>
        <DividerEnd />
        <ImageWrapper>
          <Fade>
            <Phone
              windowWidth={windowWidth}
              images={{ big, small }}
            />
          </Fade>
        </ImageWrapper>
      </Wrapper>
    )}
  />
)

SectionPhone.propTypes = {
  windowWidth: PropTypes.number.isRequired
}

export default () => addWindowWidth(SectionPhone)

const query = graphql`
  {
    big: file(relativePath: { regex: "/crypto_phone/"}) {
      childImageSharp {
        fluid(maxWidth: 650) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    small: file(relativePath: { regex: "/crypto_phone-mobile/"}) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`