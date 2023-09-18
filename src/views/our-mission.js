import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import TestimonialCard3 from '../components/testimonial-card3'
import Footer from '../components/footer'
import './our-mission.css'

const OurMission = (props) => {
  return (
    <div className="our-mission-container">
      <Helmet>
        <title>Our-mission - untitled-project-1</title>
        <meta property="og:title" content="Our-mission - untitled-project-1" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <div className="our-mission-banner">
        <h1 className="our-mission-text">Our Mission</h1>
        <span className="our-mission-text1">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
              dignissim tortor. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi
              ut rhoncus. Integer in dignissim tortor. Sed non volutpat turpis.
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim ortor.
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
        <button className="our-mission-button button">Read More</button>
      </div>
      <div className="our-mission-container1"></div>
      <div className="our-mission-testimonial">
        <h1 className="our-mission-text5">
          <span>Our clients speak</span>
        </h1>
        <span className="our-mission-text7">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
            dignissim tortor.
          </span>
        </span>
        <div className="our-mission-container2">
          <TestimonialCard3
            picture_src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxtYW58ZW58MHx8fHwxNjI2NDUyMDM1&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName"
          ></TestimonialCard3>
          <TestimonialCard3
            picture_src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtYW58ZW58MHx8fHwxNjI2NDUyMDM1&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName"
          ></TestimonialCard3>
          <TestimonialCard3
            picture_src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName"
          ></TestimonialCard3>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default OurMission
