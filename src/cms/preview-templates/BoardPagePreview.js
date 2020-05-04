import React from 'react'
import PropTypes from 'prop-types'
import { BoardPageTemplate } from '../../templates/board-page'

const BoardPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  const entryMembers = entry.getIn(['data', 'members'])
  const members = entryMembers ? entryMembers.toJS() : []

  if(data) {
    return (      
      <BoardPageTemplate
        header={{
          title: entry.getIn(['data', 'header', 'title']),
          subTitle: entry.getIn(['data', 'header', 'subTitle']),
        }}
        members={members}
      />            
    )
  } else {
    return <div>Loading...</div>
  }
}

BoardPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default BoardPagePreview
