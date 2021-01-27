import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import { isAuthorizedUser } from '../utils/authorizedGroups';

const PrivateRoute = ({ component: Component, isLoggedIn, location, user, ...rest }) => {
  if (!isLoggedIn) {
    navigate('/', {
      state: {
        backUrl: `${location.pathname}`
      }
    })
    return null
  }

  if (!isAuthorizedUser(user)) {
    navigate('/', {
      state: {
        error: 'no-authz'
      }
    })
    return null
  }

  return (<Component location={location} {...rest} />);
}

export default connect(null, {})(PrivateRoute)