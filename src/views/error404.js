import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './error404.css'

const Error404 = (props) => {
  return (
    <div className="error404-container">
      <Helmet>
        <title>error404 - untitled-project-1</title>
        <meta property="og:title" content="error404 - untitled-project-1" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <div className="error404-hero">
        <span className="error404-text">ERROR: 404 page not found</span>
        <h1 className="error404-text1">Oops, You&apos;ve taken a wrong turn</h1>
        <Link to="/" className="error404-navlink button">
          Navigate Home
        </Link>
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default Error404
