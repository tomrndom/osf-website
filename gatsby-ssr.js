import React from 'react';
import ReduxWrapper from "./src/state/ReduxWrapper"
// @see https://www.gatsbyjs.com/docs/adding-redux-store/
export const wrapRootElement = ReduxWrapper

export const replaceRenderer = ({ wrapRootElement }) => {
    <SEO>
        {wrapRootElement}
    </SEO>
}

export const onPreRenderHTML = ({
    getHeadComponents,
    replaceHeadComponents,
}) => {
    const headComponents = getHeadComponents();
    headComponents.forEach(head => {
        if (head.props && head.props['data-react-helmet']) {
            delete head.props['data-react-helmet'];
        }
    });
    headComponents.sort((a, b) => {
        if (a.type === b.type || (a.type !== 'style' && b.type !== 'style')) {
            return 0;
        }

        if (a.type === 'style') {
            return 1;
        } else if (b.type === 'style') {
            return -1;
        }

        return 0;
    });

    replaceHeadComponents(headComponents);
};

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