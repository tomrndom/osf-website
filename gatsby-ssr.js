import SEO from "./src/components/SEO"
import ReduxWrapper from "./src/state/ReduxWrapper"
// @see https://www.gatsbyjs.com/docs/adding-redux-store/
export const wrapRootElement = ({ element }) => {
    <SEO>
        <ReduxWrapper>
            {element}
        </ReduxWrapper>
    </SEO>
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