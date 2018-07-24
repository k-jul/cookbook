import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Form, TextArea, Input, Button, Header } from 'semantic-ui-react';

import {addNewReceipt, switchAdded} from './ReceiptNewActions';
import './ReceiptNew.css';

class ReceiptNew extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(evt, {name, value}) {
        this.setState({
            [name]: value
        })
    }

    onCancel() {
        this.props.history.push('/recipes');
    }

    onSubmit() {
        if (this.state.title && this.state.description)
            console.log(this.actions, 'this.actions')
            this.props.actions.addNewReceipt({
                title: this.state.title,
                description: this.state.description
            });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newReceipt.addedSuccess) {
            this.props.actions.switchAdded(false)
        }
            this.props.history.push('/recipes');
    }

    render() {
        return <Container>
                <Header size='large'>Add new receipt</Header>
                <Form>
                    <Form.Group widths='equal'>
                    <Form.Field
                        id='form-input-control-first-name'
                        control={Input}
                        label='Title'
                        placeholder='Title'
                        name="title"
                        onChange={this.handleChange}
                    />
                    </Form.Group>
                    <Form.Field
                        id='form-textarea-control-opinion'
                        control={TextArea}
                        label='Description'
                        placeholder='Description'
                        name="description"
                        onChange={this.handleChange}
                    />
                    <div>
                        <Button negative onClick={this.onCancel}>Cancel</Button>
                        <Button positive onClick={this.onSubmit}>Save</Button>
                    </div>
                </Form>
            </Container>
    }
}

const mapStateToProps = state => {
    return {
        newReceipt: state.receiptNewReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({addNewReceipt, switchAdded}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptNew);
