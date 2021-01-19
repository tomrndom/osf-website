import React from 'react'
import PropTypes from "prop-types";
import AffiliationForm from "./AffiliationForm";

const Affiliations = class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            selectedAffiliation:null,
        }

        this.onAddHandle = this.onAddHandle.bind(this);
        this.onHandleClose = this.onHandleClose.bind(this);
        this.onHandleSave = this.onHandleSave.bind(this);
    }

    onAddHandle(){
        this.setState({...this.state, showModal : !this.state.showModal});
    }

    onHandleClose(){
        this.setState({...this.state, showModal : false});
    }

    onHandleSave(entity){
        this.setState({...this.state, showModal : false});
    }

    render(){
        return (
            <div>
                <h2>Affiliations</h2>
                <button role="button" className="btn" onClick={this.onAddHandle}>Add new Affiliation</button>
                {   this.state.showModal &&
                    <AffiliationForm onClose={this.onHandleClose} onSave={this.onHandleSave} affiliation={this.state.selectedAffiliation}/>
                }
            </div>
        );
    }
}


Affiliations.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default Affiliations