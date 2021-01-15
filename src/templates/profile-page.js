import React from 'react'
import { connect } from 'react-redux'
import { navigate } from "gatsby"

import Layout from '../components/Layout'
import envVariables from '../utils/envVariables'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Hero from "../components/Hero";

export const ProfilePageTemplate = ({ isLoggedUser, location }) => {

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <Navbar isLoggedUser={isLoggedUser}/>
                <Header title="Profile" subTitle="Profile"/>
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            <div className="columns">
                                <div className="column">
                                    <p>Profile page content</p>
                                </div>
                            </div>
                        </div>
                    </section>
                 </div>
            </main>
        </div>
    )
}

const ProfilePage = ({ isLoggedUser, location }) => {
    return (
        <Layout>
            <ProfilePageTemplate
                location={location}
                isLoggedUser={isLoggedUser}
            />
        </Layout>
    )
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(ProfilePage)