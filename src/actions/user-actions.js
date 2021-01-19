import {
  getRequest,
  putRequest,
  postRequest,
  deleteRequest,
  createAction,
  stopLoading,
  startLoading,
  authErrorHandler
} from "openstack-uicore-foundation/lib/methods";

import { customErrorHandler } from '../utils/customErrorHandler';

export const START_LOADING_IDP_PROFILE = 'START_LOADING_IDP_PROFILE';
export const STOP_LOADING_IDP_PROFILE  = 'STOP_LOADING_IDP_PROFILE';
export const GET_IDP_PROFILE           = 'GET_IDP_PROFILE';
export const MEMBERSHIP_TYPE_COMMUNITY = 'Community';
export const MEMBERSHIP_TYPE_FOUNDATION = 'Foundation';
export const MEMBERSHIP_TYPE_NONE = 'None';
export const AFFILIATION_SAVED        = 'AFFILIATION_SAVED';
export const AFFILIATION_DELETED      = 'AFFILIATION_DELETED';
export const AFFILIATION_ADDED        = 'AFFILIATION_ADDED';
export const ORGANIZATION_ADDED       = 'ORGANIZATION_ADDED';


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

/******************************  AFFILIATIONS **************************************************/


export const addOrganization = (organization, callback) => (dispatch, getState) => {
  const { loggedUserState } = getState();
  const { accessToken }     = loggedUserState;

  const params = {
    access_token : accessToken,
  };

  dispatch(startLoading());

  postRequest(
      null,
      createAction(ORGANIZATION_ADDED),
      `${window.API_BASE_URL}/api/v1/organizations`,
      {name: organization},
      authErrorHandler
  )(params)(dispatch).then((payload) => {
    dispatch(stopLoading());
    callback(payload.response);
  });

}


export const addAffiliation = (affiliation) => (dispatch, getState) => {
  const { loggedUserState } = getState();
  const { accessToken }     = loggedUserState;

  dispatch(startLoading());

  const params = {
    access_token : accessToken,
    expand: 'organization'
  };

  const normalizedEntity = normalizeEntity(affiliation);

  postRequest(
      null,
      createAction(AFFILIATION_ADDED),
      `${window.API_BASE_URL}/api/v1/members/${affiliation.owner_id}/affiliations`,
      normalizedEntity,
      authErrorHandler,
      affiliation
  )(params)(dispatch).then((payload) => {
    dispatch(stopLoading());
  });

}

export const saveAffiliation = (affiliation) => (dispatch, getState) => {
  const { loggedUserState } = getState();
  const { accessToken }     = loggedUserState;

  dispatch(startLoading());


  const params = {
    access_token : accessToken,
  };

  const normalizedEntity = normalizeEntity(affiliation);

  putRequest(
      null,
      createAction(AFFILIATION_SAVED),
      `${window.API_BASE_URL}/api/v1/members/${affiliation.owner_id}/affiliations/${affiliation.id}`,
      normalizedEntity,
      authErrorHandler
  )(params)(dispatch)
      .then((payload) => {
        dispatch(stopLoading());
      });

}

export const deleteAffiliation = (ownerId, affiliationId) => (dispatch, getState) => {

  const { loggedUserState } = getState();
  const { accessToken }     = loggedUserState;

  const params = {
    access_token : accessToken,
  };

  return deleteRequest(
      null,
      createAction(AFFILIATION_DELETED)({affiliationId}),
      `${window.API_BASE_URL}/api/v1/members/${ownerId}/affiliations/${affiliationId}`,
      null,
      authErrorHandler
  )(params)(dispatch).then(() => {
        dispatch(stopLoading());
      }
  );
};

const normalizeEntity = (entity) => {
  const normalizedEntity = {...entity};

  if (!normalizedEntity.end_date) delete(normalizedEntity['end_date']);

  normalizedEntity.organization_id = (normalizedEntity.organization != null) ? normalizedEntity.organization.id : 0;
  delete(normalizedEntity['organization']);

  return normalizedEntity;

}
