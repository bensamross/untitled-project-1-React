import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FeatureCard3 from '../components/feature-card3'
import FeatureCard4 from '../components/feature-card4'
import PricingPlans from '../components/pricing-plans'
import TestimonialCard2 from '../components/testimonial-card2'
import TestimonialCard4 from '../components/testimonial-card4'
import SignUp from '../components/sign-up'
import ContactForm from '../components/contact-form'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>untitled-project-1</title>
        <meta property="og:title" content="untitled-project-1" />
      </Helmet>
      <Header rootClassName="header-root-class-name4"></Header>
      <div className="home-hero">
        <div className="home-container01">
          <h1 className="home-text">
            Leave expensive car bills in the rear view mirror
          </h1>
          <span className="home-text01">
            Welcome to Clutch, the digital service that connects car owners to
            the best mechanics in town. We help you save up a balance toward big
            bills, while you gather discounts along the way.
          </span>
          <button className="home-button button">Get Started</button>
        </div>
      </div>
      <div className="home-features">
        <h1 className="home-text02">
          <span>Explore our services</span>
          <br></br>
          <span></span>
        </h1>
        <span className="home-text05">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem
            lorem, malesuada in metus vitae, scelerisque accumsan ipsum. Nam
            pellentesque nulla leo, sagittis vehicula sem commodo nec.​
          </span>
          <span></span>
        </span>
        <div className="home-container02">
          <FeatureCard3 rootClassName="rootClassName"></FeatureCard3>
          <FeatureCard3 rootClassName="rootClassName3"></FeatureCard3>
          <FeatureCard3 rootClassName="rootClassName5"></FeatureCard3>
          <FeatureCard3 rootClassName="rootClassName1"></FeatureCard3>
        </div>
      </div>
      <div className="home-features1">
        <h1 className="home-text08">
          <span>Discover our</span>
          <br></br>
          <span>unique features</span>
        </h1>
        <div className="home-separator"></div>
        <div className="home-container03">
          <div className="home-container04">
            <FeatureCard4 rootClassName="rootClassName1"></FeatureCard4>
            <FeatureCard4 rootClassName="rootClassName4"></FeatureCard4>
            <FeatureCard4 rootClassName="rootClassName3"></FeatureCard4>
            <FeatureCard4 rootClassName="rootClassName2"></FeatureCard4>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxtaW5pbWFsaXNtfGVufDB8fHx8MTYyNjQ0NTY1Nw&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="home-image"
          />
        </div>
      </div>
      <div className="home-stats">
        <div className="home-stat">
          <h1 className="home-text12">
            <span>50</span>
            <span>+</span>
          </h1>
          <span className="home-text15">Happy clients</span>
          <span className="home-text16">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className="home-stat1">
          <h1 className="home-text17">
            <span>369</span>
          </h1>
          <span className="home-text19">Projects completed</span>
          <span className="home-text20">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className="home-stat2">
          <h1 className="home-text21">
            <span>500</span>
            <span>+</span>
          </h1>
          <span className="home-text24">Hours</span>
          <span className="home-text25">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className="home-stat3">
          <h1 className="home-text26">
            <span>24/7</span>
          </h1>
          <span className="home-text28">Support</span>
          <span className="home-text29">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
      </div>
      <div className="home-hero1">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1200"
          className="home-image1"
        />
        <div className="home-container05">
          <h1 className="home-text30">Our Mission and Vision</h1>
          <span className="home-text31">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
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
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
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
          <div className="home-btn-group">
            <button className="home-button1 button">Get Started</button>
            <button className="home-button2 button">Learn More</button>
          </div>
        </div>
      </div>
      <PricingPlans rootClassName="pricing-plans-root-class-name"></PricingPlans>
      <div className="home-testimonial">
        <div className="home-container06">
          <div className="home-container07">
            <div className="home-container08">
              <TestimonialCard2
                profile_src="https://images.unsplash.com/photo-1614630982169-e89202c5e045?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUyMTk4&amp;ixlib=rb-1.2.1&amp;h=1200"
                rootClassName="rootClassName1"
              ></TestimonialCard2>
            </div>
            <TestimonialCard2
              profile_src="https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fHBvcnRyYWl0JTIwYnd8ZW58MHx8fHwxNjI2NDUyMjQw&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName2"
            ></TestimonialCard2>
          </div>
          <div className="home-container09">
            <TestimonialCard4
              picture_src="https://images.unsplash.com/photo-1546456073-ea246a7bd25f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGJsYWNrJTIwbWFufGVufDB8fHx8MTYyNjQ1MjAwOA&amp;ixlib=rb-1.2.1&amp;h=1200"
              profile_src="https://images.unsplash.com/photo-1553184118-d20774c4c1db?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMGJ3fGVufDB8fHx8MTYyNjQ1MjI0MA&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
            ></TestimonialCard4>
          </div>
        </div>
      </div>
      <SignUp></SignUp>
      <ContactForm rootClassName="contact-form-root-class-name"></ContactForm>
      <Footer></Footer>
    </div>
  )
}

export default Home
