import {
    getRequest,
    createAction,
    stopLoading,
    startLoading,
} from 'openstack-uicore-foundation/lib/methods';

import { customErrorHandler } from '../utils/customErrorHandler';

export const REQUEST_SPONSORSHIP_TYPES = 'REQUEST_SPONSORSHIP_TYPES';
export const RECEIVE_SPONSORSHIP_TYPES = 'RECEIVE_SPONSORSHIP_TYPES';


/******************************  SPONSORS **************************************************/

export const getSponsorhipTypes = () => (dispatch, getState) => {
    dispatch(startLoading());

    const params = {
        expand: 'supporting_companies, supporting_companies.company'
    }

    return getRequest(
        null,
        createAction(REQUEST_SPONSORSHIP_TYPES),
        `${process.env.GATSBY_API_BASE_URL}/api/public/v1/sponsored-projects/${process.env.GATSBY_SPONSORED_PROJECT_ID}/sponsorship-types`,
        customErrorHandler
    )(params)(dispatch).then((sponsorshipTypes) => {
        dispatch(createAction(RECEIVE_SPONSORSHIP_TYPES)(sponsorshipTypes));
    }).catch(e => {
        dispatch(stopLoading());
        return (e);
    });
}