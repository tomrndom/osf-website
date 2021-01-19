import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
  putFile,
  createAction,
} from 'openstack-uicore-foundation/lib/methods';


import { customErrorHandler } from '../utils/customErrorHandler';

export const START_LOADING_IDP_PROFILE = 'START_LOADING_IDP_PROFILE';
export const STOP_LOADING_IDP_PROFILE  = 'STOP_LOADING_IDP_PROFILE';
export const GET_IDP_PROFILE           = 'GET_IDP_PROFILE';
export const MEMBERSHIP_TYPE_COMMUNITY = 'Community';
export const MEMBERSHIP_TYPE_FOUNDATION = 'Foundation';
export const MEMBERSHIP_TYPE_NONE = 'None';

export const getIDPProfile = () => (dispatch, getState) => {

  let { loggedUserState: { accessToken } } = getState();

  if (!accessToken) return Promise.resolve();

  let params = {
    access_token: accessToken,
  };

  return getRequest(
    createAction(START_LOADING_IDP_PROFILE),
    createAction(GET_IDP_PROFILE),
    `${window.IDP_BASE_URL}/api/v1/users/me`,
    customErrorHandler
  )(params)(dispatch)
    .then(() => dispatch(dispatch(createAction(STOP_LOADING_IDP_PROFILE))));
}