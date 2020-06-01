import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix, graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'

import metadata from '../content/site-metadata.json'

export const GenericPageTemplate = ({
  seo,
  title,
  subTitle,
  footer,  
  content, 
  contentComponent
}) => {
  const PageContent = contentComponent || Content  

  return (
    <div>
      {seo && 
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
      }
      <div className="wrapper project-background">
        <TopBar />
        <Navbar />
        <Header title={title} subTitle={subTitle}/>
      </div>
      
      <main className="main">
        <div className="content">          
          <section className="section about-s1-main">
            <div className="container about-s1-container">
              <div className="columns">
                <div className="column">
                  <PageContent content={content} />
                </div>
              </div>
            </div>              
          </section>
          <Hero content={footer}/>
        </div>
      </main>
    </div>
  )
}

GenericPageTemplate.propTypes = {  
  seo: PropTypes.object,  
  companies: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  footer: PropTypes.object,
}

const GenericPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <GenericPageTemplate
        contentComponent={HTMLContent}
        seo={post.frontmatter.seo}
        title={post.frontmatter.title}
        subTitle={post.frontmatter.subTitle}
        footer={post.frontmatter.footer}
        content={post.html}
      />
    </Layout>
  )
}

GenericPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default GenericPage

export const genericPageQuery = graphql`
  query GenericPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        seo {
          title
          description
          url
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          twitterUsername
        }
        title
        subTitle
        footer {
          title
          subTitle
          button
          buttonText
          display
        }
      }
    }
  }
`
