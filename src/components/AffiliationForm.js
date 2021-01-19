import React from 'react'
import PropTypes from "prop-types";
import {DateTimePicker, OrganizationInput} from 'openstack-uicore-foundation/lib/components'
import {epochToMoment} from 'openstack-uicore-foundation/lib/methods'

const AffiliationForm = class extends React.Component {

    constructor(props) {
        console.log("AffiliationForm::constructor")
        super(props);
        this.state = {
            id: this.props.currentAffiliation ? this.props.currentAffiliation.id: 0,
            job_title: this.props.currentAffiliation ? this.props.currentAffiliation.job_title: '',
            organization: this.props.currentAffiliation ? this.props.currentAffiliation.organization: null,
            start_date:this.props.currentAffiliation ? this.props.currentAffiliation.start_date: '',
            end_date:this.props.currentAffiliation ? this.props.currentAffiliation.end_date: '',
            is_current: this.props.currentAffiliation ? this.props.currentAffiliation.is_current: 0,
        }

        this.onHandleSave = this.onHandleSave.bind(this);
        this.onHandleClose = this.onHandleClose.bind(this);
        this.onHandleChangeCell = this.onHandleChangeCell.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("AffiliationForm::componentDidUpdate")
        if(this.props.currentAffiliation != null && prevProps.currentAffiliation === null) {
            this.setState({...this.state,
                id: this.props.currentAffiliation ? this.props.currentAffiliation.id: 0,
                job_title: this.props.currentAffiliation ? this.props.currentAffiliation.job_title: '',
                organization: this.props.currentAffiliation ? this.props.currentAffiliation.organization: null,
                start_date:this.props.currentAffiliation ? this.props.currentAffiliation.start_date: '',
                end_date:this.props.currentAffiliation ? this.props.currentAffiliation.end_date: '',
                is_current: this.props.currentAffiliation ? this.props.currentAffiliation.is_current: 0,
            });
        }
    }

    clearForm(){
        this.setState({...this.state,
            id: 0,
            job_title: '',
            organization:null,
            start_date: '',
            end_date: '',
            is_current:0,
        })
    }

    onHandleSave(){
        this.props.onSave({...this.state});
    }

    onHandleClose(){
        this.props.onClose();
    }

    onHandleChangeCell(ev) {

        let field = ev.target;
        let value = field.value;

        if (field.type === 'checkbox') {
            value = field.checked;
        }

        if (ev.target.type === 'datetime') {
            value = value.valueOf() / 1000;
        }
        let fieldName = field.id;
        let newState = [];
        newState[`${fieldName}`] = value;

        this.setState({...this.state, ...newState });
    }

    render(){
        console.log("AffiliationForm::render")
        return (
            <div className="affiliation-form">
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <label>Job Title</label>
                                <input type="text" id="job_title" name="job_title" value={this.state.job_title}
                                       onChange={this.onHandleChangeCell}/>
                            </td>
                        </tr>
                        <tr>
                        <td key="organization">
                            <label>Organization</label>
                            <OrganizationInput
                                id="organization"
                                value={this.state.organization}
                                onChange={this.onHandleChangeCell}
                            />
                        </td>
                        </tr>
                        <tr>
                        <td key="start_date">
                            <label>Start Date</label>
                            <DateTimePicker
                                id="start_date"
                                onChange={this.onHandleChangeCell}
                                format={{date:"YYYY-MM-DD", time: false}}
                                timezone={'UTC'}
                                value={epochToMoment(this.state.start_date)}
                            />
                        </td>
                        </tr>
                        <tr>
                        <td key="end_date">
                            <label>End Date</label>
                            <DateTimePicker
                                id="end_date"
                                onChange={this.onHandleChangeCell}
                                format={{date:"YYYY-MM-DD", time: false}}
                                timezone={'UTC'}
                                value={epochToMoment(this.state.end_date)}
                            />
                        </td>
                        </tr>
                        <tr>
                        <td key="is_current" className="is-current-cell">
                            <label>Is Current?</label>
                            <input id="is_current" type="checkbox" checked={this.state.is_current} onChange={this.onHandleChangeCell}/>
                        </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button role="button" className="btn" onClick={this.onHandleClose}>Close</button>
                    <button role="button" className="btn" onClick={this.onHandleSave}>Save Changes</button>
                </div>
            </div>
        );
    }
}

AffiliationForm.propTypes = {
    currentAffiliation: PropTypes.object,
    onClose:PropTypes.func.isRequired,
    onSave:PropTypes.func.isRequired,
}

export default AffiliationForm