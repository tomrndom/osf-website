import React from 'react'
import PropTypes from 'prop-types'
import { OpenInfraLiveTemplate } from '../../templates/openinfra-live'

const LivePagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS()

  const entryEpisodes = entry.getIn(['data', 'episodes'])
  const episodes = entryEpisodes ? entryEpisodes.toJS() : []
  
  console.log('data', data);

  if(data) {
    return (
      <OpenInfraLiveTemplate
        header={{
          title: entry.getIn(['data', 'header', 'title']),
          subTitle: entry.getIn(['data', 'header', 'subTitle']),
        }}
        episodes={episodes}
        footer={{
          title: entry.getIn(['data', 'footer', 'title']),
          subTitle: entry.getIn(['data', 'footer', 'subTitle']),
          buttonText: entry.getIn(['data', 'footer', 'buttonText']),
          button: entry.getIn(['data', 'footer', 'button']),
          display: entry.getIn(['data', 'footer', 'display']),
        }}
      />            
    )
  } else {
    return <div>Loading...</div>
  }
}

LivePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default LivePagePreview
