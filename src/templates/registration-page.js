import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import envVariables from '../utils/envVariables'
import React, { useEffect } from "react"


import { doLogin } from 'openstack-uicore-foundation/lib/methods'

export const RegistrationPageTemplate = ({ loggedUserState, location }) => {

    if (loggedUserState.isLoggedUser) {
        let defaultPath = envVariables.AUTHORIZED_DEFAULT_PATH ? envVariables.AUTHORIZED_DEFAULT_PATH : '/a/';
        navigate(defaultPath);
        return null
    }

    return null;
}

const RegistrationPage = ({ loggedUserState, location }) => {

    useEffect(() => {
        doLogin('/a/profile')
    }, [loggedUserState]);

    return (
        <Layout>
            <RegistrationPageTemplate
                loggedUserState={loggedUserState}
                location={location}
            />
        </Layout>
    )
}

export default connect(state => ({
    loggedUserState: state.loggedUserState
}), null)(RegistrationPage)