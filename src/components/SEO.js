import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { withPrefix } from 'gatsby'

import metadata from "../content/site-metadata.json"


const SEO = ({ seo = {} }) => {

  const { siteMetadata: {
    title,
    titleTemplate,
    description,
    url,
    image,
    twitterUsername,
    themeColor } } = metadata;

  return (
    <>
      <Helmet title={seo.title ? seo.title : title} titleTemplate={titleTemplate}>
        <meta charSet="utf-8" />
        <meta name="description" content={seo.description ? seo.description : description} />
        <meta name="image" content={seo.image?.publicURL ? `${url}${seo.image.publicURL.slice(1)}` : `${url}${image.slice(1)}`} />
        <meta name="theme-color" content={themeColor} />
        {url && <meta property="og:url" content={`${seo.url ? seo.url : url}`} />}
        {title && <meta property="og:title" content={seo.title ? seo.title : title} />}
        {description && (
          <meta property="og:description" content={seo.description ? seo.description : description} />
        )}
        {image && <meta property="og:image" content={seo.image?.publicURL ? `${url}${seo.image.publicURL.slice(1)}` : `${url}${image.slice(1)}`} />}
        <meta name="twitter:card" content="summary" />
        {twitterUsername && (
          <meta name="twitter:creator" content={twitterUsername} />
        )}
        <meta name="twitter:site" content="@OpenInfraDev" />
        {title && <meta name="twitter:title" content={title} />}
        {description && (
          <meta name="twitter:description" content={seo.description ? seo.description : description} />
        )}
        {image && <meta name="twitter:image" content={seo.image?.publicURL ? `${url}${seo.image.publicURL.slice(1)}` : `${url}${image.slice(1)}`} />}
      </Helmet>
    </>
  )
}

export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  twitterUsername: PropTypes.string,
  themeColor: PropTypes.string
}

SEO.defaultProps = {
  title: null,
  titleTemplate: null,
  description: null,
  url: null,
  image: null,
  twitterUsername: null,
  themeColor: null
}