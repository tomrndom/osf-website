import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix, graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'

import metadata from '../content/site-metadata.json'
import CompaniesSection from '../components/CompaniesSection'
import PeopleSection from '../components/PeopleSection'
import ProjectSection from '../components/ProjectSection'
import WhyExpandSection from '../components/WhyExpandSection'
import MainPitchSection from '../components/MainPitchSection'

export const IndexPageTemplate = ({
  seo,
  header,
  mainpitch,
  whyExpand,
  projects,
  people,
  sponsor,
}) => (
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
    <div className="wrapper hero-background">
      <TopBar />
      <Navbar />
      <Header upperTitle={header.upperTitle} title={header.title} subTitle={header.subTitle} image={header.image} buttons={header.buttons} isHome={true} />
    </div>
    
      <main className="main">
        <div className="content">

          <MainPitchSection mainpitch={mainpitch} />          

          <WhyExpandSection whyExpand={whyExpand} />
          
          <ProjectSection projects={projects} />
          
          <PeopleSection people={people} />                    

          <CompaniesSection sponsor={sponsor} />
                  
      </div>
    </main>
  </div>
)

IndexPageTemplate.propTypes = {  
  seo: PropTypes.object,
  header: PropTypes.object,
  mainpitch: PropTypes.object,
  whyExpand: PropTypes.object,
  projects: PropTypes.object,
  people: PropTypes.object,
  sponsor: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        seo={frontmatter.seo}
        header={frontmatter.header}        
        mainpitch={frontmatter.mainpitch}
        whyExpand={frontmatter.whyExpand}
        projects={frontmatter.projects}
        people={frontmatter.people}
        sponsor={frontmatter.sponsor}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
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
          upperTitle
          title
          subTitle          
          buttons {
            text
            link
          }
        }
        mainpitch {
          row1 {
            title
            text
            images {
              image {
                childImageSharp {
                  fluid(maxWidth: 640, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
              }
              width
              height
            }
          }
          row2 {
            title
            text
            images {
              image {
                childImageSharp {
                  fluid(maxWidth: 640, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
              }
            }
          }          
        }
        whyExpand {
          title
          text
          icons {
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
            text
          }          
        }
        projects {
          title
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
              extension
            }
          }
          text
          button {
            link
            text
          }
        }
        people {
          title
          review {
            name
            user
            picture
            text
          }
        }
        sponsor {
          title
          platinum {
            title
            companyList {
              image {
                childImageSharp {
                  fluid(maxWidth: 640, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
                extension
              }
              alt
            }
          }
          gold {
            title
            companyList {
              image {
                childImageSharp {
                  fluid(maxWidth: 640, quality: 64) {
                    ...GatsbyImageSharpFluid
                  }
                }
                publicURL
                extension
              }
              alt
            }
          }
        }
      }
    }
  }
`
