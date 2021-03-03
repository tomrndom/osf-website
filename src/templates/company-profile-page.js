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
import {connect} from "react-redux";

export const CompanyProfilePageTemplate = ({
  isLoggedUser,
  seo,
  name,  
  logo,
  description,
  contributions,
  productsServices,
  moreInformation,
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
        <Navbar isLoggedUser={isLoggedUser}/>
        <Header title={name} subTitle='Company Profile'/>        
      </div>
      
      <main className="main">
        <div className="content">          
          <section className="section about-s1-main">
            <div className="container about-s1-container">
              <div className="columns">
                <div className="column">
                  <h3>Description</h3>
                  {description}
                  <h3>Contributions To OpenStack From {name}</h3>
                  {contributions}
                  <h3>SoProducts & Services</h3>
                  {productsServices}
                  <h3>For More Information</h3>
                  {moreInformation}
                  <PageContent content={content} />
                </div>
              </div>
            </div>              
          </section>
          {footer &&
            <Hero content={footer}/>
          }
        </div>
      </main>
    </div>
  )
}

CompanyProfilePageTemplate.propTypes = {  
  seo: PropTypes.object,  
  companies: PropTypes.object,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  footer: PropTypes.object,
}

const CompanyProfilePage = ({isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CompanyProfilePageTemplate
        isLoggedUser={isLoggedUser}
        contentComponent={HTMLContent}
        seo={post.frontmatter.seo}
        name={post.frontmatter.name}
        logo={post.frontmatter.logo}        
        description={post.frontmatter.description}
        contributions={post.frontmatter.contributions}
        productsServices={post.frontmatter.productsServices}
        moreInformation={post.frontmatter.moreInformation}
        footer={post.frontmatter.footer}        
        content={post.html}
      />
    </Layout>
  )
}

CompanyProfilePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(CompanyProfilePage)

export const companyProfilePageQuery = graphql`
  query CompanyProfilePage($id: String!) {
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
        name
        logo {
            childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
            }
        }
        description
        contributions
        productsServices
        moreInformation
      }
    }
  }
`
