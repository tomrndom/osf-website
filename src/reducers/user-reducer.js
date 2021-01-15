import { LOGOUT_USER } from "openstack-uicore-foundation/lib/actions";

import {
  GET_IDP_PROFILE,
  START_LOADING_IDP_PROFILE,
  STOP_LOADING_IDP_PROFILE
} from '../actions/user-actions'

const DEFAULT_STATE = {
  loadingIDP: false,
  idpProfile: null,
}

const userReducer = (state = DEFAULT_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case LOGOUT_USER:
      return DEFAULT_STATE;
    case START_LOADING_IDP_PROFILE:
      return { ...state, loadingIDP: true };
    case STOP_LOADING_IDP_PROFILE:
      return { ...state, loadingIDP: false };
    case GET_IDP_PROFILE:
      return { ...state, idpProfile: payload.response }
    default:
      return state;
  }
}

export default userReducer
