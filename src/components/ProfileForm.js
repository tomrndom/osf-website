import React from 'react'
import PropTypes from "prop-types";

const ProfileForm = class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            <div>

            </div>
        );
    }
}


ProfileForm.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileForm