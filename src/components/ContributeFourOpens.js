import React from 'react'

import LinkComponent from './LinkComponent'

const ContributeFourOpens = class extends React.Component {
  render() {

    const { footer: { title, subTitle, button, buttonText, display } } = this.props;

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

export default ContributeFourOpens