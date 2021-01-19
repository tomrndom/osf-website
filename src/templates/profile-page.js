import React, { useState } from "react"
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
import 'openstack-uicore-foundation/lib/css/components.css';

export const ProfilePageTemplate = ({ currentMember, initialMembershipType, currentAffiliations, idpProfile, isLoggedUser, location }) => {

    const [currentMembershipType, setCurrentMembershipType] = useState(initialMembershipType);

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
        setCurrentMembershipType(type);
    }

    let query = URI.parseQuery(location.search);

    if (query.hasOwnProperty("membership_type") && initialMembershipType === MEMBERSHIP_TYPE_NONE ) {
        setCurrentMembershipType(query["membership_type"]);
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
                                    <MembershipType currentType={currentMembershipType}
                                                    initialType={initialMembershipType}
                                                    handleConvertCommunityMember={() => handleConvertCommunityMember()}
                                                    handleConvertFoundationMember={() => handleConvertFoundationMember()}
                                                    handleResign={() => handleResign()}
                                                    onSelectMembershipType={(type)=> onSelectMembershipType(type)}
                                    />
                                    {
                                        currentMembershipType !== MEMBERSHIP_TYPE_NONE &&
                                        <ProfileForm profile={idpProfile}/>
                                    }
                                    {
                                        currentMembershipType !== MEMBERSHIP_TYPE_NONE &&
                                        <Affiliations affiliations={currentAffiliations} ownerId={currentMember.id}/>
                                    }
                                    {
                                        currentMembershipType !== MEMBERSHIP_TYPE_NONE && initialMembershipType === MEMBERSHIP_TYPE_NONE &&
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

const ProfilePage = ({ currentMember, initialMembershipType, currentAffiliations, idpProfile, isLoggedUser, location }) => {
    return (
        <Layout>
            <ProfilePageTemplate
                currentMember={currentMember}
                initialMembershipType={initialMembershipType}
                currentAffiliations={currentAffiliations}
                idpProfile={idpProfile}
                location={location}
                isLoggedUser={isLoggedUser}
            />
        </Layout>
    )
}

export default connect(state => ({
    isLoggedUser: state.loggedUserState.isLoggedUser,
    currentMember:state.loggedUserState.member,
    initialMembershipType: state.userState.currentMembershipType,
    currentAffiliations:state.userState.currentAffiliations,
    idpProfile: state.userState.idpProfile,
}), null)(ProfilePage)