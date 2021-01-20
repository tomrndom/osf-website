import React from "react"
import { Router, Location } from "@reach/router"
import { connect } from 'react-redux'
import PrivateRoute from '../routes/PrivateRoute'
import withSessionChecker from "../utils/withSessionChecker"
import ProfilePage from "../templates/profile-page";
import RegistrationPage from "../templates/registration-page";
import ErrorPage from "../templates/error-page";
import MembershipResignPage from "../templates/membership-resign";

const App = ({ isLoggedUser, user }) => {
  return (
    <Location>
      {({ location }) => (
          <Router basepath="/a" >
            <PrivateRoute path="/profile" component={ProfilePage} isLoggedIn={isLoggedUser} user={user} location={location} />
            <PrivateRoute path="/profile/membership/resign" component={MembershipResignPage} isLoggedIn={isLoggedUser} user={user} location={location}/>
            <RegistrationPage path="/registration" location={location} isLoggedIn={isLoggedUser} />
            <ErrorPage path="/error" location={location} isLoggedIn={isLoggedUser}/>
          </Router>
      )}
    </Location>
  )
}

const mapStateToProps = ({ loggedUserState, userState }) => ({
  isLoggedUser: loggedUserState.isLoggedUser,
  user: loggedUserState.member
})

export default connect(mapStateToProps)(withSessionChecker(App))