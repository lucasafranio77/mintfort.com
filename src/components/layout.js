import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { injectGlobal } from "styled-components"
import styled, { css } from 'styled-components'
import { configureAnchors } from 'react-scrollable-anchor'

import Header from 'components/header'
import Footer from 'components/footer'
import SEO from 'components/seo'
import { Context, addLang } from 'components/context'

import { theme, hover, transitions } from 'library/utils'

configureAnchors({
  offset: -60,
  scrollDuration: 800
})

injectGlobal`
  a {
    text-decoration: none;
    color: #1f1f1f;

    ${hover(css`
      color: ${theme.mint};
    `)}

    ${transitions('color 0.1s ease')};
  }

  main {
    overflow-x: hidden;
  }

  button {
    &:focus {
      outline: 0;
    }
  }
`

const siteWidth = '2560px'

const Site = styled.div`
  margin: 0 auto;
  max-width: ${siteWidth};
`

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Context location={location}>
        <Site>
          {addLang(SEO, { path: location.pathname })}
          {addLang(Header, {
            siteTitle: data.site.siteMetadata.title,
            location,
            siteWidth
          })}
          <main>
            {children}
          </main>
          <Footer />
        </Site>
      </Context>
    )}
  />
)

Layout.propTypes = {
  location: PropTypes.object.isRequired
}

export default Layout
