import React from 'react'
import PropTypes from 'prop-types'
import { CompaniesPageTemplate } from '../../templates/companies-page'

const CompaniesPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  const entryCompanies = entry.getIn(['data', 'companies'])
  const companies = entryCompanies ? entryCompanies.toJS() : []

  if(data) {
    return (    
      <CompaniesPageTemplate
        header={{
          title: entry.getIn(['data', 'header', 'title']),
          subTitle: entry.getIn(['data', 'header', 'subTitle']),
          link:{
            text: entry.getIn(['data', 'header', 'link', 'text']),
            url: entry.getIn(['data', 'header', 'link', 'url']),
          }
        }}
        companies={companies}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

CompaniesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default CompaniesPagePreview
