import React from "react";
import { Helmet } from "react-helmet";

import ReduxWrapper from "./src/state/ReduxWrapper"
// @see wrapRootElement
export const wrapRootElement = ReduxWrapper;

export const onRenderBody = (
    { setHeadComponents, setHtmlAttributes, setBodyAttributes },
    pluginOptions
) => {
    const helmet = Helmet.renderStatic()
    setHtmlAttributes(helmet.htmlAttributes.toComponent())
    setBodyAttributes(helmet.bodyAttributes.toComponent())
    setHeadComponents([
        helmet.title.toComponent(),
        helmet.link.toComponent(),
        helmet.meta.toComponent(),
        helmet.noscript.toComponent(),
        helmet.script.toComponent(),
        helmet.style.toComponent(),
    ])
}

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    const headComponents = getHeadComponents()

    headComponents.sort((x, y) => {
        if (x.props && x.props["data-react-helmet"]) {
            return -1
        } else if (y.props && y.props["data-react-helmet"]) {
            return 1
        }
        return 0
    })

    replaceHeadComponents(headComponents)
}

window.IDP_BASE_URL = process.env.GATSBY_IDP_BASE_URL;
window.OAUTH2_CLIENT_ID = process.env.GATSBY_OAUTH2_CLIENT_ID;
window.SCOPES = process.env.GATSBY_SCOPES;
window.API_BASE_URL = process.env.GATSBY_API_BASE_URL;