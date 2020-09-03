import React from 'react'
import Helmet from 'react-helmet'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import TopBar from '../../components/TopBar';
import Navbar from '../../components/Navbar';
import BlogRoll from '../../components/BlogRoll'

import blogConfig from '../../content/blog-config.json'
import metadata from '../../content/site-metadata.json'

export default class BlogIndexPage extends React.Component {


  render() {
    const { filter } = this.props;
    return (
      <Layout>
        <div>
          {/* {seo &&
            <Helmet title={seo.title ? seo.title : metadata.siteMetadata.title} titleTemplate={metadata.siteMetadata.titleTemplate}>
              {seo.description && <meta name="description" content={seo.description} />}
              {seo.image && <meta name="image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}
              {seo.url && <meta property="og:url" content={seo.url} />}
              {seo.title && <meta property="og:title" content={seo.title} />}
              {seo.description && (
                <meta property="og:description" content={seo.description} />
              )}
              {seo.image && <meta property="og:image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}
              <meta name="twitter:card" content="summary_large_image" />
              {seo.twitterUsername && (
                <meta name="twitter:creator" content={seo.twitterUsername} />
              )}
              {seo.title && <meta name="twitter:title" content={seo.title} />}
              {seo.description && (
                <meta name="twitter:description" content={seo.description} />
              )}
              {seo.image && <meta name="twitter:image" content={`${withPrefix('/')}${seo.image.publicURL}`} />}
            </Helmet>
          } */}
          <div className="wrapper project-background">
            <TopBar />
            <Navbar />
            <Header title={blogConfig.title} subTitle={blogConfig.subTitle} />
          </div>
          <main className="main">
            {blogConfig &&
              <Helmet title={blogConfig.title ? blogConfig.title : metadata.siteMetadata.title} titleTemplate={metadata.siteMetadata.titleTemplate}>
                {blogConfig.subTitle && <meta name="description" content={blogConfig.subTitle} />}
                {blogConfig.title && <meta property="og:title" content={blogConfig.title} />}
                {blogConfig.subTitle && (
                  <meta property="og:description" content={blogConfig.subTitle} />
                )}
                <meta name="twitter:card" content="summary_large_image" />
                {blogConfig.title && <meta name="twitter:title" content={blogConfig.title} />}
                {blogConfig.subTitle && (
                  <meta name="twitter:description" content={blogConfig.subTitle} />
                )}
              </Helmet>
            }
            <div className="content">
              <section className="section blog-s1-main">
                <div className="container blog-s1-container">
                  <div className="columns">
                    <div className="column is-three-quarters">
                      <div className="content">
                        <div>
                          <BlogRoll customFilter={filter ? filter : null} />
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <aside>
                        <ul className="widgets">
                          <li className="widget item-no-bullet">
                            <div className="widget-head">
                              <h4 className="widget-title">Categories</h4>
                            </div>
                            <div className="widget-body">
                              <ul className="widget-list">
                                {blogConfig.categories.map(category => <li><Link to={`/category/${kebabCase(category.text)}/`}>{category.text}</Link></li>)}
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </aside>
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
