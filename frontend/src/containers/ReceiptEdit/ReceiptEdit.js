import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Form, TextArea, Input, Button, Header } from 'semantic-ui-react';

import {getReceiptById, updateReceipt, switchAddedUpdate} from './ReceiptEditActions';
import './ReceiptEdit.css';


class ReceiptEdit extends Component {
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

    componentWillMount() {
        this.props.actions.getReceiptById(this.props.match.params.id)
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
            this.props.actions.updateReceipt({
                _id: this.props.editReceipt.currentReceipt._id,
                updatedAt: new Date(),
                title: this.state.title,
                description: this.state.description
            });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.editReceipt.currentReceipt.title) {
            this.setState({
                title: nextProps.editReceipt.currentReceipt.title,
                description: nextProps.editReceipt.currentReceipt.description
            })
        }
        if (nextProps.editReceipt.updatedSuccess) {
            this.props.actions.switchAddedUpdate(false);
            this.props.history.push('/recipes');
        }
    }

    render() {
        return <Container>
            <Header className='mt_20' size='large'>Edit receipt</Header>
            <Form>
                <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    label='Title'
                    placeholder='Title'
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                </Form.Group>
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Description'
                    placeholder='Description'
                    name="description"
                    value={this.state.description}
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
        editReceipt: state.receiptEditReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({getReceiptById, updateReceipt, switchAddedUpdate}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptEdit);
