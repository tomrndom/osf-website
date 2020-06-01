import React from 'react'

import LinkComponent from './LinkComponent'

const Hero = class extends React.Component {
  render() {

    const { content: { title, subTitle, button, buttonText, display } } = this.props;

    if (display) {
      return (
        <section className="projects-s2-main">
          <div className="container">
            <h4 className="itemtitle">{title}</h4>
            <div className="fix-h5">
              {subTitle}
            </div>
            <LinkComponent href={button} className="button button-red">
              <span>{buttonText}</span>
            </LinkComponent>
          </div>
        </section>
      )
    } else {
      return null
    }
  }
}

export default Hero