import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import envVariables from '../utils/envVariables'
import React, { useEffect } from "react"


import { doLogin } from 'openstack-uicore-foundation/lib/methods'

export const ErrorPageTemplate = ({ loggedUserState, location }) => {

    return <div>ERROR</div>;
}

const ErrorPage = ({ loggedUserState, location }) => {


    return (
        <Layout>
            <ErrorPageTemplate
                loggedUserState={loggedUserState}
                location={location}
            />
        </Layout>
    )
}

export default connect(state => ({
    loggedUserState: state.loggedUserState
}), null)(ErrorPage)