import React from 'react'
import PropTypes from 'prop-types'
import { HostingPageTemplate } from '../../templates/hosting-page'

const HostingPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  const entryList = entry.getIn(['data', 'row1', 'list'])
  const list = entryList ? entryList.toJS() : []

  const entryImages1 = entry.getIn(['data', 'row1', 'images'])
  const images1 = entryImages1 ? entryImages1.toJS() : []

  const entryImages2 = entry.getIn(['data', 'row2', 'images'])
  const images2 = entryImages2 ? entryImages2.toJS() : []

  if(data) {
    return (
      <HostingPageTemplate
        header={{
          title: entry.getIn(['data', 'header', 'title']),
          subTitle: entry.getIn(['data', 'header', 'subTitle']),
        }}
        row1={{
          title: entry.getIn(['data', 'row1', 'title']),
          text1: entry.getIn(['data', 'row1', 'text1']),
          list: list,
          text2: entry.getIn(['data', 'row1', 'text2']),
          text3: entry.getIn(['data', 'row1', 'text3']),
          email: {
            text: entry.getIn(['data', 'row1', 'email', 'text']),
            link: entry.getIn(['data', 'row1', 'email', 'link']),
          },
          images: images1
        }}
        row2={{
          title: entry.getIn(['data', 'row2', 'title']),
          text1: entry.getIn(['data', 'row2', 'text1']),            
          text2: entry.getIn(['data', 'row1', 'text2']),                        
          images: images2
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

HostingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default HostingPagePreview
