import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment';

class NewsRoll extends React.Component {
  render() {
    const { news } = this.props
    return (
      news && news.length === 0 ?
        <div style={{ minHeight: '47vh' }}>There don't seem to be any news that match.</div>
        :
        news.sort((a, b) => b.date.localeCompare(a.date)).map((post, index) => {
          if (post.featured === false) {
            return (
              <div className="article-excerpt" key={index}>
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
                <hr />
              </div>
            )
          }
        }
        )
    )
  }
}

export default NewsRoll