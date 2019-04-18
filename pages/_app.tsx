import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

const CenteredMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossOrigin="anonymous"
          />
        </Head>
        <GlobalStyles />
        <CenteredMain>
          <Component {...pageProps} />
        </CenteredMain>
      </Container>
    )
  }
}
