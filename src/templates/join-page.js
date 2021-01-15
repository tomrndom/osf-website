import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types'
import { withPrefix, graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'
import envVariables from '../utils/envVariables'
import metadata from '../content/site-metadata.json'

export const JoinPageTemplate = ({
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
                    {footer &&
                    <Hero content={footer}/>
                    }
                </div>
            </main>
        </div>
    )
}

JoinPageTemplate.propTypes = {
    seo: PropTypes.object,
    companies: PropTypes.object,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    footer: PropTypes.object,
}

const JoinPage = ({ data }) => {
    const { markdownRemark: post } = data

    const handleOnClick = useCallback(event => {
        event.preventDefault();
        let origin = window.location.origin;
        let membershipType = event.currentTarget.dataset.membershipType;
        let url = `${envVariables.IDP_BASE_URL}/auth/register?client_id=${envVariables.OAUTH2_CLIENT_ID}&redirect_uri=${encodeURI(`${origin}/a/registration#membership_type=${membershipType}`)}`;
        window.location = url;
    }, []);

    useEffect(() => {

        let Anchors = document.getElementsByClassName("membership_action");

        for (var i = 0; i < Anchors.length ; i++) {
            Anchors[i].addEventListener("click", handleOnClick);
        }

        return () => {
            let Anchors = document.getElementsByClassName("membership_action");

            for (var i = 0; i < Anchors.length ; i++) {
                Anchors[i].removeEventListener("click", handleOnClick);
            }

        };
    }, [handleOnClick]);

    return (
        <Layout>
            <JoinPageTemplate
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

JoinPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default JoinPage

export const joinPageQuery = graphql`
  query JoinPage($id: String!) {
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
