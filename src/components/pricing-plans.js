import React from 'react'

import PropTypes from 'prop-types'

import './pricing-plans.css'

const PricingPlans = (props) => {
  return (
    <div className={`pricing-plans-container ${props.rootClassName} `}>
      <div className="pricing-plans-container1">
        <h1 className="">{props.heading}</h1>
        <span className="pricing-plans-text01">
          <span className="">
            <span className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
              lorem, malesuada in metus vitae, scelerisque accumsan ipsum.
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
      </div>
      <div className="pricing-plans-container2">
        <div className="pricing-plans-container3">
          <span className="pricing-plans-text05">{props.text}</span>
          <span className="pricing-plans-text06">{props.text1}</span>
          <span className="pricing-plans-text07">
            <span className="pricing-plans-text08">10</span>
            <span className=""> Projects</span>
          </span>
          <span className="pricing-plans-text10">
            <span className="pricing-plans-text11">99</span>
            <span className=""> Components</span>
          </span>
          <span className="pricing-plans-text13">
            <span className="pricing-plans-text14">3</span>
            <span className=""> Collaborators</span>
          </span>
          <span className="pricing-plans-text16">
            <span className="pricing-plans-text17">Public projects</span>
          </span>
          <button className="pricing-plans-button button">
            {props.button}
          </button>
        </div>
        <div className="pricing-plans-container4">
          <span className="pricing-plans-text18">{props.text2}</span>
          <span className="pricing-plans-text19">{props.text3}</span>
          <span className="pricing-plans-text20">
            <span className="pricing-plans-text21">100</span>
            <span className=""> Projects</span>
          </span>
          <span className="pricing-plans-text23">
            <span className="pricing-plans-text24">1000</span>
            <span className=""> Components</span>
          </span>
          <span className="pricing-plans-text26">
            <span className="pricing-plans-text27">20</span>
            <span className=""> Collaborators</span>
          </span>
          <span className="pricing-plans-text29">
            <span className="pricing-plans-text30">Private projects</span>
          </span>
          <button className="pricing-plans-button1 button">
            {props.button1}
          </button>
        </div>
      </div>
    </div>
  )
}

PricingPlans.defaultProps = {
  text3: '$29',
  rootClassName: '',
  button: 'Learn More',
  text2: 'Free',
  button1: 'Learn More',
  heading: 'Pricing Plans',
  text: 'Free',
  text1: '$0',
}

PricingPlans.propTypes = {
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  text2: PropTypes.string,
  button1: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default PricingPlans
