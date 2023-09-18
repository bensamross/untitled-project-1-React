import React from 'react'

import PropTypes from 'prop-types'

import './contact-form.css'

const ContactForm = (props) => {
  return (
    <div className={`contact-form-container ${props.rootClassName} `}>
      <div className="contact-form-row1">
        <div className="contact-form-column1">
          <span className="">{props.text2}</span>
          <h1 className="">{props.heading1}</h1>
          <span className="">{props.text3}</span>
        </div>
        <div className="contact-form-column2">
          <form className="contact-form-form">
            <div className="contact-form-container1">
              <span className="">{props.text41}</span>
              <input
                type="text"
                placeholder={props.textinput_placeholder5}
                className="input"
              />
            </div>
            <div className="contact-form-container2">
              <span className="">{props.text42}</span>
              <input
                type="text"
                placeholder={props.textinput_placeholder6}
                className="input"
              />
            </div>
            <div className="contact-form-container3">
              <span className="">{props.text4}</span>
              <input
                type="text"
                placeholder={props.textinput_placeholder4}
                className="input"
              />
            </div>
            <div className="contact-form-container4">
              <button type="button" className="button">
                {props.button}
              </button>
              <input type="checkbox" checked="true" className="" />
              <span className="">{props.text43}</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm.defaultProps = {
  textinput_placeholder5: 'placeholder',
  text43: 'Sign up to our newsletter',
  text41: 'Email address',
  text2: 'Contact us',
  text4: 'Message',
  textinput_placeholder: 'placeholder',
  text1: 'Text',
  textinput_placeholder4: 'placeholder',
  heading: 'Heading',
  textinput_placeholder3: 'placeholder',
  rootClassName: '',
  textinput_placeholder1: 'placeholder',
  textinput_placeholder6: 'placeholder',
  text42: 'Name',
  text3:
    'If you have any questions or feedback, please feel free to contact us. You can reach us at info@mysite.com or by phone at 123-456-7890.',
  text: 'Text',
  textinput_placeholder2: 'placeholder',
  button: 'Submit',
  heading1: 'Get in touch',
}

ContactForm.propTypes = {
  textinput_placeholder5: PropTypes.string,
  text43: PropTypes.string,
  text41: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text1: PropTypes.string,
  textinput_placeholder4: PropTypes.string,
  heading: PropTypes.string,
  textinput_placeholder3: PropTypes.string,
  rootClassName: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  textinput_placeholder6: PropTypes.string,
  text42: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  button: PropTypes.string,
  heading1: PropTypes.string,
}

export default ContactForm
