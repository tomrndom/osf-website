import React from 'react'
import PropTypes from "prop-types";
import legalDoc from '../content/legal-document.json';
import {MEMBERSHIP_TYPE_COMMUNITY, MEMBERSHIP_TYPE_FOUNDATION, MEMBERSHIP_TYPE_NONE} from "../actions/user-actions";

const MembershipType = class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type : this.props.selectedType,
        }
        this.onSelectMembershipType = this.onSelectMembershipType.bind(this);
    }

    onSelectMembershipType(event){
        let type = event.target.dataset.membershipType;
        this.setState({...this.state, type: type});
        this.props.onSelectMembershipType(type);
    }

    render() {
        let{type, handleResign, handleConvertFoundationMember, handleConvertCommunityMember} = this.props;
        if(type === MEMBERSHIP_TYPE_COMMUNITY){
            return(<div className="membership-type-container">
                <button role="button" id="resign" onClick={handleResign}>Resign Membership</button>&nbsp;<button role="button" id="foundation" onClick={handleConvertFoundationMember}>Make Me a Foundation Member</button>
            </div>);
        }
        if(type === MEMBERSHIP_TYPE_FOUNDATION){
            return(<div className="membership-type-container">
            <button role="button" id="resign" onClick={handleResign}>Resign Membership</button>&nbsp;<button role="button" id="community" onClick={handleConvertCommunityMember}>Change to Community Member</button>
            </div>);
        }
        if(type === MEMBERSHIP_TYPE_NONE){
            return (
           <div className="membership-type-container">
               <button role="button" className={'btn btn-select-membership-type'+(this.state.type === 'foundation'?" active":"")} id="foundation"
                       data-membership-type="foundation"
                       onClick={this.onSelectMembershipType}>Make Me a Foundation Member</button>&nbsp;<button
               role="button" id="community"
               className={'btn btn-select-membership-type'+(this.state.type === 'community'?" active":"")}
               data-membership-type="community"
               onClick={this.onSelectMembershipType}>Make Me a Community Member</button>
               {this.state.type === 'foundation' &&
               <h2>Read Over the terms off becoming an Open Infrastructure Foundation Individual Member</h2>
               }
               {this.state.type === 'foundation' &&
                   <div className="legal_doc_content" dangerouslySetInnerHTML={{ __html: legalDoc.content }}>
                   </div>
               }
               {this.state.type === 'community' &&
                   <h2>Complete the Individual Member Application</h2>
               }
            </div>);
        }
        return null;
    }
}

MembershipType.propTypes = {
    type: PropTypes.string.isRequired,
    handleResign:PropTypes.func.isRequired,
    handleConvertFoundationMember: PropTypes.func.isRequired,
    handleConvertCommunityMember: PropTypes.func.isRequired,
    onSelectMembershipType:PropTypes.func.isRequired,
}

export default MembershipType