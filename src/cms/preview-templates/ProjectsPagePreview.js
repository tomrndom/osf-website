import React from 'react'
import PropTypes from 'prop-types'
import { ProjectsPageTemplate } from '../../templates/projects-page'

const ProjectsPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  const entryConfirmed = entry.getIn(['data', 'confirmed', 'projectList'])
  const confirmedList = entryConfirmed ? entryConfirmed.toJS() : []

  const entryPilot = entry.getIn(['data', 'pilot', 'projectList'])
  const pilotList = entryPilot ? entryPilot.toJS() : []

  if(data) {
    return (
      <ProjectsPageTemplate
        header={{
          title: entry.getIn(['data', 'header', 'title']),
          subTitle: entry.getIn(['data', 'header', 'subTitle']),
        }}
        confirmed={{
          title: entry.getIn(['data', 'confirmed', 'title']),
          projectList: confirmedList
        }}
        pilot={{
          title: entry.getIn(['data', 'pilot', 'title']),
          projectList: pilotList
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ProjectsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default ProjectsPagePreview
