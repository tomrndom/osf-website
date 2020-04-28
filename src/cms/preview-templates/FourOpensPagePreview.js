import React from 'react'
import PropTypes from 'prop-types'
import { FourOpensPageTemplate } from '../../templates/fourOpens-page'

const FourOpensPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  if(data) {
    return (
      <FourOpensPageTemplate
        header={{
          title: entry.getIn(['data', 'header', 'title']),
          subTitle: entry.getIn(['data', 'header', 'subTitle']),
        }}
        content={widgetFor('body')}        
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

FourOpensPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default FourOpensPagePreview
