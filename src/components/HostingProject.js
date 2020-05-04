import React from 'react'

import content from '../content/hosting-project.json'
import LinkComponent from './LinkComponent'

const HostingProject = class extends React.Component {
  render() {
    return (
      <section className="projects-s2-main">
        <div className="container">
          <h4 className="itemtitle">{content.title}</h4> 
          <div className="fix-h5">
            {content.subTitle}
          </div> 
          <LinkComponent href={content.email} className="button button-red projects-btn">
            <span>{content.email_text}</span>
          </LinkComponent>
        </div>
      </section>
    )
  }
}

export default HostingProject
