import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import envVariables from '../utils/envVariables'
import React, { useEffect } from "react"


import { doLogin } from 'openstack-uicore-foundation/lib/methods'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'

export const ErrorPageTemplate = ({ loggedUserState, location }) => {

    return <div>ERROR</div>;
}

const ErrorPage = ({ loggedUserState, location }) => {


    return (
        <Layout>
            <div className="wrapper project-background">
                <TopBar />
                <Navbar isLoggedUser={false} />                
            </div>
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