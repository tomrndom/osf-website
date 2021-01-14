import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import URI from "urijs";
import { doLogin } from 'openstack-uicore-foundation/lib/methods'

import envVariables from '../utils/envVariables'

import HeroComponent from '../components/HeroComponent'

export const TokenExpirePageTemplate = class extends React.Component {

  componentDidMount() {

    const { location } = this.props;

    if (window.authExpired === undefined) {
      window.authExpired = true

      let defaultPath = envVariables.AUTHORIZED_DEFAULT_PATH ? envVariables.AUTHORIZED_DEFAULT_PATH : '/a/';
      let previousLocation = location.state?.backUrl && location.state.backUrl !== '/auth/expired' ? location.state.backUrl : defaultPath;
      let backUrl = URI.encode(previousLocation);

    }
  }

  render() {
    return (
      <HeroComponent
        title="Checking credentials..."
      />
    )
  }
}

TokenExpirePageTemplate.propTypes = {
  loggedUser: PropTypes.object,
  location: PropTypes.object,
}

const TokenExpirePage = ({ loggedUser, location }) => {

  return (
    <TokenExpirePageTemplate
      loggedUser={loggedUser}
      location={location}
    />
  )

}

TokenExpirePage.propTypes = {
  loggedUser: PropTypes.object,
  location: PropTypes.object,
}

const mapStateToProps = ({ loggedUserState }) => ({
  loggedUser: loggedUserState
})

export default connect(mapStateToProps, { })(TokenExpirePage);
