import React from 'react'
import { connect } from 'react-redux'
import { navigate } from "gatsby"
import Layout from '../components/Layout'
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MembershipType from "../components/MembershipType";
import ProfileForm from "../components/ProfileForm"
import Affiliations from "../components/Affiliations";
import URI from "urijs";
import {MEMBERSHIP_TYPE_NONE} from "../actions/user-actions";

export const ProfilePageTemplate = ({ member, idpProfile, isLoggedUser, location }) => {

    const handleConvertCommunityMember = () => {
        navigate('/a/membership-community')
    };

    const handleConvertFoundationMember = () => {
        navigate('/a/membership-foundation')
    }

    const handleResign = () => {
        navigate('/a/membership-resign')
    }

    const onSelectMembershipType = (type) => {
        console.log(`selected type ${type}`);
    }

    let query = URI.parseQuery(location.search);
    let membershipType = null;

    if (query.hasOwnProperty("membership_type")) {
        membershipType = query["membership_type"];
    }

    return (
        <div>
            <div className="wrapper project-background">
                <TopBar />
                <Navbar isLoggedUser={isLoggedUser}/>
                <Header title={`${idpProfile.given_name} ${idpProfile.family_name}`} subTitle="Profile"/>
            </div>

            <main className="main">
                <div className="content">
                    <section className="section about-s1-main">
                        <div className="container about-s1-container">
                            <div className="columns">
                                <div className="column">
                                    <MembershipType type={member.membership_type}
                                                    selectedType={membershipType}
                                                    handleConvertCommunityMember={() => handleConvertCommunityMember()}
                                                    handleConvertFoundationMember={() => handleConvertFoundationMember()}
                                                    handleResign={() => handleResign()}
                                                    onSelectMembershipType={(type)=> onSelectMembershipType(type)}
                                    />
                                    <ProfileForm profile={idpProfile}/>
                                    <Affiliations profile={member}/>
                                    {
                                        member.membership_type === MEMBERSHIP_TYPE_NONE &&
                                            <button role="button" className="btn">Submit my Application</button>
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                 </div>
            </main>
        </div>
    )
}

const ProfilePage = ({ member, idpProfile, isLoggedUser, location }) => {
    return (
        <Layout>
            <ProfilePageTemplate
                member={member}
                idpProfile={idpProfile}
                location={location}
                isLoggedUser={isLoggedUser}
            />
        </Layout>
    )
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
    member: state.loggedUserState.member,
    idpProfile: state.userState.idpProfile,
}), null)(ProfilePage)