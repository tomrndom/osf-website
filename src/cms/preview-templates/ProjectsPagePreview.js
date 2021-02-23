import React from 'react'
import PropTypes from 'prop-types'
import { ProjectsPageTemplate } from '../../templates/projects-page'

import projectCategories from '../../content/project-categories.json';

const ProjectsPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()  

  const entryProjectList = entry.getIn(['data', 'projectList'])
  const projectList = entryProjectList ? entryProjectList.toJS() : []

  if(data) {
    return (
      <ProjectsPageTemplate
        header={{
          title: entry.getIn(['data', 'header', 'title']),
          subTitle: entry.getIn(['data', 'header', 'subTitle']),
        }}
        projectCategories={projectCategories}
        projectList={projectList}
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
