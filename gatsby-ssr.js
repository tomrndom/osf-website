import React from "react";
import { Helmet } from "react-helmet";

import ReduxWrapper from "./src/state/ReduxWrapper"
// @see https://www.gatsbyjs.com/docs/adding-redux-store/
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
    });

    headComponents.sort((a, b) => {
        if (a.type === b.type || (a.type !== 'meta' && b.type !== 'meta')) {
            return 0;
        }

        if (a.type === 'meta') {
            return 1;
        } else if (b.type === 'meta') {
            return -1;
        }

        return 0;
    });

    replaceHeadComponents(headComponents)
}

import { JSDOM } from 'jsdom'
import { Blob } from 'blob-polyfill';
import { XMLHttpRequest } from 'xmlhttprequest';

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