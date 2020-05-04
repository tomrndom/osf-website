import React from 'react'
import PropTypes from 'prop-types'
import { StaffPageTemplate } from '../../templates/staff-page'

const StaffPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()  

  const entryMembers = entry.getIn(['data', 'members'])
  const members = entryMembers ? entryMembers.toJS() : []

  const entrySupporting = entry.getIn(['data', 'support', 'members'])
  const supportList = entrySupporting ? entrySupporting.toJS() : []  

  if(data) {
    return (
      <StaffPageTemplate
        header={{
          title: entry.getIn(['data', 'header', 'title']),
          subTitle: entry.getIn(['data', 'header', 'subTitle']),
        }}
        banner={{
          title: entry.getIn(['data', 'banner', 'title']),
          subTitle: entry.getIn(['data', 'banner', 'subTitle']),
          image: entry.getIn(['data', 'banner', 'image']),
          button: {
            text: entry.getIn(['data', 'banner', 'button', 'text']),
            url: entry.getIn(['data', 'banner', 'button', 'url']),
          }
        }}        
        members={members}
        support={{
          title: entry.getIn(['data', 'support', 'title']),
          members: supportList
        }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

StaffPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default StaffPagePreview
