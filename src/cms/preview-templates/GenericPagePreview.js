import React from 'react'
import PropTypes from 'prop-types'
import { GenericPageTemplate } from '../../templates/generic-page'

const GenericPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <GenericPageTemplate
        title={entry.getIn(['data', 'title'])}
        subTitle={entry.getIn(['data', 'subTitle'])}
        footer={{
          title: entry.getIn(['data', 'footer', 'title']),
          subTitle: entry.getIn(['data', 'footer', 'subTitle']),
          button: entry.getIn(['data', 'footer', 'button']),
          buttonText: entry.getIn(['data', 'footer', 'buttonText']),
          display: entry.getIn(['data', 'footer', 'display']),
        }}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

GenericPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default GenericPagePreview
