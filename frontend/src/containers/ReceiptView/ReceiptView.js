import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Header, Button } from 'semantic-ui-react';

import {getReceiptById} from '../ReceiptEdit/ReceiptEditActions';
import './ReceiptView.css';


class ReceiptEdit extends Component {
    constructor(props) {
        super(props);

       this.onBack = this.onBack.bind(this)
    }

    componentWillMount() {
        this.props.actions.getReceiptById(this.props.match.params.id)
    }

    onBack() {
        this.props.history.push('/recipes');
    }

    render() {
        return <Container>
            <Header className='mt_20 title' size='large'>{this.props.viewReceipt.currentReceipt.title}</Header>
            <div className='description'>{this.props.viewReceipt.currentReceipt.description}</div>
            <Button positive onClick={this.onBack}>Back</Button>
        </Container>
    }
}

const mapStateToProps = state => {
    return {
        viewReceipt: state.receiptViewReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({getReceiptById}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptEdit);
