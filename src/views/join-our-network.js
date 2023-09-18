import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard1 from '../components/feature-card1'
import ContactForm from '../components/contact-form'
import Footer from '../components/footer'
import './join-our-network.css'

const JoinOurNetwork = (props) => {
  return (
    <div className="join-our-network-container">
      <Helmet>
        <title>Join-our-network - untitled-project-1</title>
        <meta
          property="og:title"
          content="Join-our-network - untitled-project-1"
        />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="join-our-network-features">
        <h1 className="join-our-network-text">Join our service network</h1>
        <div className="join-our-network-separator"></div>
        <div className="join-our-network-container1">
          <div className="join-our-network-container2">
            <FeatureCard1 rootClassName="rootClassName1"></FeatureCard1>
            <FeatureCard1 rootClassName="rootClassName4"></FeatureCard1>
            <FeatureCard1 rootClassName="rootClassName3"></FeatureCard1>
            <FeatureCard1 rootClassName="rootClassName2"></FeatureCard1>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="join-our-network-image"
          />
        </div>
      </div>
      <div className="join-our-network-steps">
        <h1 className="join-our-network-text01">
          <span>Our Approach</span>
        </h1>
        <div className="join-our-network-container3">
          <div className="join-our-network-container4">
            <div className="join-our-network-step">
              <h1 className="join-our-network-text03">
                <span>1</span>
              </h1>
              <h1 className="join-our-network-text05">
                <span></span>
                <span>Concept</span>
              </h1>
              <span className="join-our-network-text08">
                <span></span>
                <span></span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
            <div className="join-our-network-step1">
              <h1 className="join-our-network-text13">
                <span>2</span>
              </h1>
              <h1 className="join-our-network-text15">
                <span>Prototype</span>
              </h1>
              <span className="join-our-network-text17">
                <span></span>
                <span></span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
          <div className="join-our-network-container5">
            <div className="join-our-network-step2">
              <h1 className="join-our-network-text22">
                <span>3</span>
              </h1>
              <h1 className="join-our-network-text24">
                <span>P</span>
                <span>roduction</span>
              </h1>
              <span className="join-our-network-text27">
                <span></span>
                <span></span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
            <div className="join-our-network-step3">
              <h1 className="join-our-network-text32">
                <span>4</span>
              </h1>
              <h1 className="join-our-network-text34">
                <span>Shipping</span>
              </h1>
              <span className="join-our-network-text36">
                <span></span>
                <span></span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <ContactForm rootClassName="contact-form-root-class-name1"></ContactForm>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default JoinOurNetwork
