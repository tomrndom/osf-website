import React from 'react'
import PropTypes from "prop-types";

const AffiliationForm = class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            job_title:null,
            organization:null,
            start_date:null,
            end_date:null,
            is_current:false,
        }
        this.onHandleSave = this.onHandleSave.bind(this);
    }

    onHandleSave(){
        this.props.onSave(this.state);
    }

    render(){
        return (
            <div>
                <div>
                    <input type="text" id="job_title" name="job_title" placeholder="Job Title" value={this.state.job_title}/>
                    <input type="text" id="organization" name="organization" placeholder="Organization" value={this.state.organization}/>
                </div>
                <div>
                    <button role="button" className="btn" onClick={this.props.onClose}>Close</button>
                    <button role="button" className="btn" onClick={this.onHandleSave}>Save Changes</button>
                </div>
            </div>
        );
    }
}

AffiliationForm.propTypes = {
    affiliation: PropTypes.object,
    onClose:PropTypes.func.isRequired,
    onSave:PropTypes.func.isRequired,
}

export default AffiliationForm