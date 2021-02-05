import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import envVariables from '../utils/envVariables'
import React, { useEffect } from "react"


import { doLogin } from 'openstack-uicore-foundation/lib/methods'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

export const ErrorPageTemplate = ({ loggedUserState, location }) => {

    return (
        <>
            <div className="wrapper project-background">
                <TopBar />
                <Navbar isLoggedUser={false} />
                <Header title="NOT FOUND" subTitle="You just hit a route that doesn&#39;t exist... the sadness." />
            </div>
            <div style={{ height: '45vw' }}>
            </div>
        </>
    );
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