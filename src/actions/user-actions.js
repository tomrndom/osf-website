import {
  getRequest,
  postRequest,
  deleteRequest,
  putRequest,
  putFile,
  createAction,
} from 'openstack-uicore-foundation/lib/methods';


import { customErrorHandler } from '../utils/customErrorHandler';

export const GET_USER_PROFILE          = 'GET_USER_PROFILE';
export const REQUEST_USER_PROFILE      = 'REQUEST_USER_PROFILE';
export const START_LOADING_PROFILE     = 'START_LOADING_PROFILE';
export const STOP_LOADING_PROFILE      = 'STOP_LOADING_PROFILE';
export const UPDATE_PROFILE_PIC        = 'UPDATE_PROFILE_PIC';
export const START_LOADING_IDP_PROFILE = 'START_LOADING_IDP_PROFILE';
export const STOP_LOADING_IDP_PROFILE  = 'STOP_LOADING_IDP_PROFILE';
export const GET_IDP_PROFILE           = 'GET_IDP_PROFILE';
export const UPDATE_IDP_PROFILE        = 'UPDATE_IDP_PROFILE';

export const getUserProfile = () => (dispatch, getState) => {

  let { loggedUserState: { accessToken } } = getState();

  if (!accessToken) return Promise.resolve();

  let params = {
    access_token: accessToken,
    expand: 'groups'
  };

  return getRequest(
    createAction(START_LOADING_PROFILE),
    createAction(GET_USER_PROFILE),
    `${window.API_BASE_URL}/api/v1/members/me`,
    customErrorHandler
  )(params)(dispatch).then(() => dispatch(dispatch(createAction(STOP_LOADING_PROFILE))));
}

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

export const updateProfilePicture = (pic) => (dispatch, getState) => {
  let { loggedUserState: { accessToken } } = getState();

  if (!accessToken) return Promise.resolve();

  let params = {
    access_token: accessToken,
  };

  putFile(
    createAction(START_LOADING_IDP_PROFILE),
    createAction(UPDATE_PROFILE_PIC),
    `${window.IDP_BASE_URL}/api/v1/users/me/pic`,
    pic,
    {},
    customErrorHandler,
  )(params)(dispatch)
    .then(() => dispatch(getIDPProfile()));
}

export const updateProfile = (profile) => (dispatch, getState) => {
  let { loggedUserState: { accessToken } } = getState();

  if (!accessToken) return Promise.resolve();

  let params = {
    access_token: accessToken,
  };

  putRequest(
    createAction(START_LOADING_IDP_PROFILE),
    createAction(UPDATE_IDP_PROFILE),
    `${window.IDP_BASE_URL}/api/v1/users/me`,
    profile,
    customErrorHandler
  )(params)(dispatch)
    .then(() => dispatch(getIDPProfile()))
    .catch(() => dispatch(dispatch(createAction(STOP_LOADING_IDP_PROFILE))));
}