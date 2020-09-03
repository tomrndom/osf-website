import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Content, { HTMLContent } from '../components/Content'

import metadata from '../content/site-metadata.json'
import blogConfig from '../content/blog-config.json'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  title,
  date,
  author,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
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
        <div className="content">
          <section className="section blog-s1-main">
            <div className="container blog-s1-container">
              <div className="columns">
                <div className="column">
                  <div className="article-single">
                    <div className="article-single-head">
                      <h3 className="article-single-title">{title}</h3>
                      <div className="article-single-meta">
                        <p>By <Link to={`/author/${kebabCase(author)}/`}>{author}</Link> on {date}</p>
                      </div>
                    </div>
                    <div className="article-single-entry">
                      <div className="content custom">
                        <PostContent content={content} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>          
        </div>
      </main>      
    </div>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta property="og:type" content="article" />
            <meta property="article:published_time" content={`${post.frontmatter.date}`} />
          </Helmet>
        }
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date (formatString: "DD/MM/YYYY", locale: "en_us")
        title
        author
      }
    }
  }
`
