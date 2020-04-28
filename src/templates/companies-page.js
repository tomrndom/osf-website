import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix, graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import BecomeSponsor from '../components/BecomeSponsor'

import metadata from '../content/site-metadata.json'

export const CompaniesPageTemplate = ({
  seo,
  header,  
  companies,  
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
        <Header title={header.title} subTitle={header.subTitle} link={header.link}/>
      </div>    
      
      <main className="main">
        <div className="content">
          <div className="container">
            <section className="companies-s1-main">
              {companies.map((tier, index) => {
                return (
                  <div className="companies-s1-container" key={index}>
                    <div className="companies-s1-columns">
                      <div className="companies-s1-column1">
                        <div className="fix-h3">{tier.title}</div> 
                        <div className="fix-h5" dangerouslySetInnerHTML={{__html: tier.text}}>
                        </div>
                      </div>
                      <div className="companies-s1-1-container">
                        {tier.companyList.map((company, index) => {
                          return (                      
                            <img src={
                              (company.image.extension === 'svg' || company.image.extension === 'gif') && !company.image.childImageSharp ?
                              company.image.publicURL 
                              :
                              !! company.image.childImageSharp ? company.image.childImageSharp.fluid.src : company.image
                            } alt={company.alt} width={company.width ? company.width : null} key={index} /> 
                          )
                        })}
                      </div>
                    </div>              
                  </div>   
                )
              })}           
            </section>
          </div>
          <PageContent content={content} />
          <BecomeSponsor />
        </div>
      </main>
    </div>
  )
}

CompaniesPageTemplate.propTypes = {  
  seo: PropTypes.object,
  header: PropTypes.object,
  companies: PropTypes.array,
}

const CompaniesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CompaniesPageTemplate        
        contentComponent={HTMLContent}
        seo={post.frontmatter.seo}
        header={post.frontmatter.header}        
        companies={post.frontmatter.companies}        
      />
    </Layout>
  )
}

CompaniesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CompaniesPage

export const companiesPageQuery = graphql`
  query CompaniesPage($id: String!) {
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
        header {
          title
          subTitle
          link {
            url
            text
          }
        }        
        companies {
          title
          text
          companyList {            
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL
            }
            alt
            width
          }
        }        
      }
    }
  }
`
