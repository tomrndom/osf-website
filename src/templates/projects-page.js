import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix, graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import HostingProject from '../components/HostingProject'

import metadata from '../content/site-metadata.json'
import leftArrow from '../img/svg/arrow-left.svg'
import LinkComponent from '../components/LinkComponent'
import {connect} from "react-redux";

export const ProjectsPageTemplate = ({
  isLoggedUser,
  seo,
  header,
  projectList,  
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
        <Header title={header.title} subTitle={header.subTitle} />
      </div>

      <main className="main">
        <div className="content">
          <section className="projects-s1-main container">
            <h3 className="itemtitle">CONFIRMED PROJECTS</h3>
            <hr className="itemtitle-hr" />
            {projectList.filter(project => project.isPilot === false).map((project, index) => {
              return (
                <div className="projects-s1-container columns" key={index}>
                  <div className="column is-2">
                    {project.logo.extension === 'svg' && !project.logo.childImageSharp ?
                      <img src={!!project.logo.publicURL ? project.logo.publicURL : project.logo} alt='' className="projetcs-s1-container-child" />
                      :
                      <img src={!!project.logo.childImageSharp ? project.logo.childImageSharp.fluid.src : project.logo} alt='' className="projetcs-s1-container-child" />
                    }
                  </div>
                  <div className="projetcs-s1-container-child column is-7 is-full-mobile">
                    <h2>{project.title}</h2>
                    <h3 id={project.class ? `${project.class}-h3` : ''}>{project.subTitle}</h3>
                    <p>
                      {project.description}
                    </p>
                    <div className="columns">
                      <div className="column is-three-fifths">
                        {project.features.map((feature, index) => {
                          return (
                            <p key={index}>
                              <img
                                src={feature.icon.extension === 'svg' && !feature.icon.childImageSharp ?
                                  feature.icon.publicURL
                                  :
                                  !!feature.icon.childImageSharp ? feature.icon.childImageSharp.fluid.src : feature.icon}
                                alt="" />
                              {feature.text}
                            </p>
                          )
                        })}
                      </div>
                      <div className="column">
                        <p>IMPORTANT LINKS:</p>
                        <br />
                        {project.links.map((link, index) => {
                          return (
                            <p key={index}>
                              <LinkComponent href={link.link}>{link.text}</LinkComponent>
                            </p>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="projetcs-s1-container-child column is-3">
                    <LinkComponent href={project.button.link} className="button button-red projects-btn" id={project.class ? `${project.class}-btn` : ''}>
                      <span>{project.button.text} <img src={leftArrow} alt="" /></span>
                    </LinkComponent>
                  </div>
                </div>
              )
            })}
          </section>
          {projectList.filter(project => project.isPilot === true).length > 0 &&
            <section className="projects-s1-main container">
              <h3 className="itemtitle">PILOT PROJECTS</h3>
              <hr className="itemtitle-hr" />
              {projectList.filter(project => project.isPilot === true).map((project, index) => {
                return (
                  <div className="projects-s1-container columns" key={index}>
                    <div className="column is-2">
                      {project.logo.extension === 'svg' && !project.logo.childImageSharp ?
                        <img src={!!project.logo.publicURL ? project.logo.publicURL : project.logo} alt='' className="projetcs-s1-container-child" />
                        :
                        <img src={!!project.logo.childImageSharp ? project.logo.childImageSharp.fluid.src : project.logo} alt='' className="projetcs-s1-container-child" />
                      }
                    </div>
                    <div className="projetcs-s1-container-child column is-7 is-full-mobile">
                      <h2>{project.title}</h2>
                      <h3 id={project.class ? `${project.class}-h3` : ''}>{project.subTitle}</h3>
                      <p>
                        {project.description}
                      </p>
                      <div className="columns">
                        <div className="column is-three-fifths">
                          {project.features.map((feature, index) => {
                            return (
                              <p key={index}>
                                <img
                                  src={feature.icon.extension === 'svg' && !feature.icon.childImageSharp ?
                                    feature.icon.publicURL
                                    :
                                    !!feature.icon.childImageSharp ? feature.icon.childImageSharp.fluid.src : feature.icon}
                                  alt="" />
                                {feature.text}
                              </p>
                            )
                          })}
                        </div>
                        <div className="column">
                          <p>IMPORTANT LINKS:</p>
                          <br />
                          {project.links.map((link, index) => {
                            return (
                              <p key={index}>
                                <LinkComponent href={link.link}>{link.text}</LinkComponent>
                              </p>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="projetcs-s1-container-child column is-3">
                      <LinkComponent href={project.button.link} className="button button-red projects-btn" id={project.class ? `${project.class}-btn` : ''}>
                        <span>{project.button.text} <img src={leftArrow} alt="" /></span>
                      </LinkComponent>
                    </div>
                  </div>
                )
              })}
            </section>
          }

          <PageContent content={content} />
          <HostingProject />
        </div>
      </main>
    </div>
  )
}

ProjectsPageTemplate.propTypes = {
  seo: PropTypes.object,
  header: PropTypes.object,
  confirmed: PropTypes.object,
  pilot: PropTypes.object,
}

const ProjectsPage = ({isLoggedUser, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProjectsPageTemplate
        isLoggedUser={isLoggedUser}
        contentComponent={HTMLContent}
        seo={post.frontmatter.seo}
        header={post.frontmatter.header}
        projectList={post.frontmatter.projectList}        
        content={post.html}
      />
    </Layout>
  )
}

ProjectsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(ProjectsPage)

export const projectsPageQuery = graphql`
  query ProjectsPage($id: String!) {
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
        }        
        projectList {
          logo {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            extension
            publicURL
          }
          title
          subTitle
          isPilot
          class
          description
          button {
            text
            link
          }
          features {
            icon {
              childImageSharp {
                fluid(maxWidth: 640, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
              extension
              publicURL
            }
            text
          }
          links {
            link
            text
          }
        }        
      }
    }
  }
`
