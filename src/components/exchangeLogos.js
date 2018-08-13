import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { flex, rem, mobile, phone } from 'library/utils'
import { Img } from 'library/index'

const Wrapper = styled.div`
  ${flex}
  flex-wrap: wrap;
`

const Logo = styled.a`
  flex-basis: 25%;
  margin: ${rem(6)};

  ${mobile(css`
    flex-basis: 45%;
  `)}

  ${phone(css`
    flex-basis: 100%;
  `)}
`

const ExchangesLogos = ({ logos }) => (
  <Wrapper>
    {logos.map(logo => (
      <Logo
        key={logo.name}
        href={logo.site}
        alt={logo.name}
        title={logo.name}
      >
        <Img
          src={require('../' + logo.path)}
        />
      </Logo>
    ))}
  </Wrapper>
)

ExchangesLogos.propTypes = {
  logos: PropTypes.array.isRequired
}

export default ExchangesLogos
