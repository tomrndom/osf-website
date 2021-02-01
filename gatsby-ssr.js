import React from 'react';
import ReduxWrapper from "./src/state/ReduxWrapper"
// @see https://www.gatsbyjs.com/docs/adding-redux-store/
export const wrapRootElement = ReduxWrapper

export const replaceRenderer = ({ wrapRootElement }) => {
    <SEO>
        {wrapRootElement}
    </SEO>
}

import Helmet from "react-helmet"

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

import { JSDOM } from 'jsdom'
import { Blob } from 'blob-polyfill';
import { XMLHttpRequest } from 'xmlhttprequest';
import SEO from "./src/components/SEO"

global.dom = new JSDOM(`...`)
global.window = dom.window
global.document = dom.window.document
global.navigator = global.window.navigator

global.window.matchMedia = function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    }
}

global.Blob = Blob
global.XMLHttpRequest = XMLHttpRequest