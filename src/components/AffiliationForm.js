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
            job_title: this.props.currentAffiliation ? this.defaultVal(this.props.currentAffiliation.job_title, '') : '',
            organization: this.props.currentAffiliation ? this.props.currentAffiliation.organization: null,
            start_date:this.props.currentAffiliation ? this.defaultVal(this.props.currentAffiliation.start_date, ''): '',
            end_date:this.props.currentAffiliation ? this.defaultVal(this.props.currentAffiliation.end_date, ''): '',
            is_current: this.props.currentAffiliation ? this.props.currentAffiliation.is_current: 0,
            validationErrors:{}
        }

        this.onHandleSave = this.onHandleSave.bind(this);
        this.onHandleClose = this.onHandleClose.bind(this);
        this.onHandleChangeCell = this.onHandleChangeCell.bind(this);
    }

    defaultVal(val, defaultVal){
        return val ? val : defaultVal;
    }

    onHandleSave(){
        let currentValidationErrors = {};
        if(this.state.job_title === ''){
            currentValidationErrors.job_title = 'Job title is mandatory.';
        }
        if(this.state.organization === null){
            currentValidationErrors.organization = 'Organization is mandatory.';
        }
        if(this.state.start_date === ''){
            currentValidationErrors.start_date = 'Start Date is mandatory.';
        }
        if(!this.state.is_current && this.state.end_date === ''){
            currentValidationErrors.start_date = 'End Date is mandatory.';
        }

        this.setState({...this.state, validationErrors:currentValidationErrors});

        if(Object.keys(currentValidationErrors).length > 0 ) return;

        this.props.onSave({...this.state});
    }

    onHandleClose(){
        this.props.onClose();
    }

    onHandleChangeCell(ev) {

        let field = ev.target;
        let value = field.value;
        let newState = [];
        if (field.type === 'checkbox') {
            value = field.checked;
            if(value)
                newState['end_date'] = '';
        }

        if (ev.target.type === 'datetime') {
            value = value.valueOf() / 1000;
        }
        let fieldName = field.id;
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
                                <div>
                                <input type="text" id="job_title" name="job_title" value={this.state.job_title}
                                       onChange={this.onHandleChangeCell}/>
                                </div>
                                {this.state.validationErrors.hasOwnProperty('job_title') &&
                                <p className="validation_error">{this.state.validationErrors.job_title}</p>
                                }
                            </td>
                        </tr>
                        <tr>
                        <td key="organization">
                            <label>Organization</label>
                            <OrganizationInput
                                id="organization"
                                value={this.state.organization}
                                onChange={this.onHandleChangeCell}
                                allowCreate
                                onCreate={this.props.onAddOrganization}
                            />
                            {this.state.validationErrors.hasOwnProperty('organization') &&
                            <p className="validation_error">{this.state.validationErrors.organization}</p>
                            }
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
                            {this.state.validationErrors.hasOwnProperty('start_date') &&
                            <p className="validation_error">{this.state.validationErrors.start_date}</p>
                            }
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
                            {this.state.validationErrors.hasOwnProperty('end_date') &&
                            <p className="validation_error">{this.state.validationErrors.end_date}</p>
                            }
                        </td>
                        </tr>
                        <tr>
                        <td key="is_current" className="is-current-cell">
                            <label>Is Current?&nbsp;</label>
                            <input id="is_current" type="checkbox" checked={this.state.is_current} onChange={this.onHandleChangeCell}/>
                            {this.state.validationErrors.hasOwnProperty('is_current') &&
                            <p className="validation_error">{this.state.validationErrors.is_current}</p>
                            }
                        </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button role="button" onClick={this.onHandleClose}>Close</button>&nbsp;
                    <button role="button" onClick={this.onHandleSave}>Save Changes</button>
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