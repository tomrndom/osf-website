import React from 'react'
import PropTypes from 'prop-types'
import { ServicesPageTemplate } from '../../templates/services-page'

const ServicesPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  const entryImages1 = entry.getIn(['data', 'row1', 'images'])
  const images1 = entryImages1 ? entryImages1.toJS() : []

  const entryImages5 = entry.getIn(['data', 'row5', 'images'])
  const images5 = entryImages5 ? entryImages5.toJS() : []

  if(data) {
    return (
      <ServicesPageTemplate
        header={{
          title: entry.getIn(['data', 'header', 'title']),
          subTitle: entry.getIn(['data', 'header', 'subTitle']),
        }}
        row1={{
          title1: entry.getIn(['data', 'row1', 'title1']),
          text1: entry.getIn(['data', 'row1', 'text1']),
          title2: entry.getIn(['data', 'row1', 'title2']),
          text2: entry.getIn(['data', 'row1', 'text2']),
          images: images1
        }}
        row2={{
          title: entry.getIn(['data', 'row2', 'title']),
          text: entry.getIn(['data', 'row2', 'text']),
          image: entry.getIn(['data', 'row2', 'image']),
        }}
        row3={{
          title: entry.getIn(['data', 'row3', 'title']),
          text: entry.getIn(['data', 'row3', 'text']),
          image: entry.getIn(['data', 'row3', 'image']),
        }}
        row4={{
          title: entry.getIn(['data', 'row4', 'title']),
          text1: entry.getIn(['data', 'row4', 'text1']),
          text2: entry.getIn(['data', 'row4', 'text2']),
          link: {
            text: entry.getIn(['data', 'row4', 'link', 'text']),
            url: entry.getIn(['data', 'row4', 'link', 'url']),
          },
          image: entry.getIn(['data', 'row4', 'image']),
        }}
        row5={{
          title: entry.getIn(['data', 'row5', 'title']),
          text1: entry.getIn(['data', 'row5', 'text1']),
          link1: {
            text: entry.getIn(['data', 'row5', 'link1', 'text']),
            url: entry.getIn(['data', 'row5', 'link1', 'url']),
          },
          text2: entry.getIn(['data', 'row5', 'text2']),
          link2: {
            text: entry.getIn(['data', 'row5', 'link2', 'text']),
            url: entry.getIn(['data', 'row5', 'link2', 'url']),
          },
          text3: entry.getIn(['data', 'row5', 'text3']),
          images: images5
        }}
        row6={{
          title1: entry.getIn(['data', 'row6', 'title1']),
          text1: entry.getIn(['data', 'row6', 'text1']),
          title2: entry.getIn(['data', 'row6', 'title2']),
          text2: entry.getIn(['data', 'row6', 'text2']),
          image: entry.getIn(['data', 'row6', 'image']),
        }}          
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default ServicesPagePreview
