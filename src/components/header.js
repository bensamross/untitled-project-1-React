import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import Logo from './logo'
import './header.css'

const Header = (props) => {
  return (
    <header
      data-role="Header"
      className={`header-header ${props.rootClassName} `}
    >
      <nav className="header-nav">
        <div className="header-navigation-links">
          <Link to="/" className="header-navlink">
            <Logo className="header-component"></Logo>
          </Link>
          <Link to="/" className="header-navlink1">
            {props.home}
          </Link>
          <Link to="/how-it-works" className="header-navlink2">
            {props.howItWorks}
          </Link>
          <Link to="/our-mission" className="header-navlink3">
            {props.ourVision}
          </Link>
          <Link to="/plans-pricing" className="header-navlink4">
            {props.plansPricing}
          </Link>
          <Link to="/join-our-network" className="header-navlink5">
            {props.joinOurNetwork}
          </Link>
        </div>
      </nav>
      <div className="header-btn-group">
        <button className="header-login button">{props.Login}</button>
        <button className="button">{props.Register}</button>
      </div>
    </header>
  )
}

Header.defaultProps = {
  joinOurNetwork: 'Join our network',
  image_alt: 'image',
  home: 'Home',
  Login: 'Login',
  image_src: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  Register: 'Register',
  plansPricing: 'Plans & Pricing',
  howItWorks: 'How it works',
  rootClassName1: '',
  rootClassName: '',
  ourVision: 'Our Mission',
}

Header.propTypes = {
  joinOurNetwork: PropTypes.string,
  image_alt: PropTypes.string,
  home: PropTypes.string,
  Login: PropTypes.string,
  image_src: PropTypes.string,
  Register: PropTypes.string,
  plansPricing: PropTypes.string,
  howItWorks: PropTypes.string,
  rootClassName1: PropTypes.string,
  rootClassName: PropTypes.string,
  ourVision: PropTypes.string,
}

export default Header
