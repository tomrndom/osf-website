import React from 'react'

import content from '../content/contribute-four-opens.json'
import LinkComponent from './LinkComponent'

const ContributeFourOpens = class extends React.Component {
  render() {
    return (
      <section className="projects-s2-main">
        <div className="container">
          <h4 className="itemtitle">{content.title}</h4>
          <div className="fix-h5">
          {content.subTitle}
          </div> 
          <LinkComponent href={content.email} className="button button-red">
              <span>{content.email_text}</span>
            </LinkComponent>
        </div>
      </section>
    )
  }
}

export default ContributeFourOpens