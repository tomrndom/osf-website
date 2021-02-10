import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'

import Layout from '../../components/Layout'
import TopBar from '../../components/TopBar';
import Navbar from '../../components/Navbar';
import NewsRoll from '../../components/NewsRoll'

import blogConfig from '../../content/blog-config.json'
import pressContent from '../../content/press-media.json' 
import FeaturedRoll from '../../components/FeaturedRoll'

export default class PressIndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      news: true,
      featured: false,
    }
  }

  render() {    
    const { news, featured } = this.state;    
    return (
      <Layout>
        <div>
          <Helmet title={blogConfig.seo.title} titleTemplate={blogConfig.seo.titleTemplate}>
            <meta name="description" content={blogConfig.seo.description} />
            <meta name="image" content={`${withPrefix('/')}${blogConfig.seo.image}`} />
            <meta property="og:url" content={blogConfig.seo.url} />
            <meta property="og:title" content={blogConfig.seo.title} />
            <meta property="og:description" content={blogConfig.seo.description} />
            <meta property="og:image" content={`${withPrefix('/')}${blogConfig.seo.image}`} />
            <meta name="theme-color" content={blogConfig.seo.themeColor} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={blogConfig.seo.twitterUsername} />
            <meta name="twitter:title" content={blogConfig.seo.title} />
            <meta name="twitter:description" content={blogConfig.seo.description} />
            <meta name="twitter:image" content={`${withPrefix('/')}${blogConfig.seo.image}`} />
          </Helmet>
          <div className="wrapper project-background">
            <TopBar />
            <Navbar />
            <main className="main">
              <section className="hero-main is-primary hero">
                <div className="hero-body">
                  <div className="container">
                    <div className="hero-project-news">
                      <h3 className="hero-project-title">Press and Media</h3>
                      <div className="hero-project-entry">
                        <span className={news ? 'active' : ''} onClick={() => this.setState({ news: !news, featured: news })}>News</span>
                        <span className={featured ? 'active' : ''} onClick={() => this.setState({ featured: !featured, news: featured })}>Featured</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
          <main className="main">
            <div className="content">
              <section className="section news-s1-main">
                <div className="container news-s1-container">
                  <div className="columns">
                    <div className="column is-full">
                      <div className="content">
                        <div>
                          {news &&
                            <NewsRoll news={pressContent.articles} />
                          }
                          {featured &&
                            <FeaturedRoll news={pressContent.articles} />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* {footer &&
                  <Hero content={footer} />
                } */}
            </div>
          </main>
        </div>
      </Layout>
    )
  }
}
