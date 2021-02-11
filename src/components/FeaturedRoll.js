import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment';

class FeaturedRoll extends React.Component {
  render() {
    const { news } = this.props
    return (
      news && news.length === 0 ?
        <div style={{ minHeight: '47vh' }}>There don't seem to be any news that match.</div>
        :
        news.sort((a, b) => b.date.localeCompare(a.date)).map((post, index) => {
          if (post.featured === true) {
            return (
              <div className="article-excerpt-featured" key={index}>
                <div className="column is-one-quarter">
                  <div className="article-excerpt-image">
                    <img src={post.image} />
                  </div>
                </div>
                <div className="column is-three-quarters">
                  <div className="article-excerpt-meta">
                    <span>{moment(post.date).format('MMM D, YYYY')}</span>
                  </div>
                  <h5 className="article-excerpt-title">
                    <Link to={post.link} className="">{post.title}</Link>
                  </h5>
                  <div className="article-excerpt-entry">
                    <div>
                      <p>{post.site}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        }
        )
    )
  }
}

export default FeaturedRoll