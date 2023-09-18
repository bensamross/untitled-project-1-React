import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './sign-up.css'

const SignUp = (props) => {
  return (
    <div className={`sign-up-banner ${props.rootClassName} `}>
      <h1 className="sign-up-text">{props.heading}</h1>
      <span className="sign-up-text1">
        <span className="">
          <span className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
            dignissim tortor.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </span>
      <div className="sign-up-btn-group">
        <Link to="/plans-pricing" className="sign-up-navlink button">
          {props.button}
        </Link>
        <Link to="/how-it-works" className="sign-up-navlink1 button">
          {props.button1}
        </Link>
      </div>
    </div>
  )
}

SignUp.defaultProps = {
  heading: 'Join our awesome service',
  rootClassName: '',
  button1: 'Learn More',
  button: 'Become a member',
}

SignUp.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  button1: PropTypes.string,
  button: PropTypes.string,
}

export default SignUp
