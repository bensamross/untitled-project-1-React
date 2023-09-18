import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PricingPlans from '../components/pricing-plans'
import FeatureCard2 from '../components/feature-card2'
import Footer from '../components/footer'
import './plans-pricing.css'

const PlansPricing = (props) => {
  return (
    <div className="plans-pricing-container">
      <Helmet>
        <title>Plans-Pricing - untitled-project-1</title>
        <meta
          property="og:title"
          content="Plans-Pricing - untitled-project-1"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name5"></Header>
      <div className="plans-pricing-banner">
        <h1 className="plans-pricing-text">Plans &amp; Pricing</h1>
        <span className="plans-pricing-text1">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
              dignissim tortor.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </span>
      </div>
      <div className="plans-pricing-pricing">
        <PricingPlans></PricingPlans>
      </div>
      <div className="plans-pricing-features">
        <h1 className="plans-pricing-text5">All these impressive features</h1>
        <div className="plans-pricing-container1">
          <FeatureCard2 rootClassName="rootClassName"></FeatureCard2>
          <FeatureCard2 rootClassName="rootClassName3"></FeatureCard2>
          <FeatureCard2 rootClassName="rootClassName2"></FeatureCard2>
          <FeatureCard2 rootClassName="rootClassName1"></FeatureCard2>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default PlansPricing
