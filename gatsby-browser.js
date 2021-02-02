import ReduxWrapper from "./src/state/ReduxWrapper"
// @see wrapRootElement
export const wrapRootElement = ReduxWrapper;

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

window.IDP_BASE_URL = process.env.GATSBY_IDP_BASE_URL;
window.OAUTH2_CLIENT_ID = process.env.GATSBY_OAUTH2_CLIENT_ID;
window.SCOPES = process.env.GATSBY_SCOPES;
window.API_BASE_URL = process.env.GATSBY_API_BASE_URL;