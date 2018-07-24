import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'semantic-ui-react';

import {getReceiptById, updateReceipt} from './ReceiptEditActions';
import './ReceiptEdit.css';


class ReceiptEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialString: 'edit receipt',
        }
    }

    componentWillMount() {
        this.props.actions.getReceiptById(this.props.match.params.id)
    }

    render() {
        return <Container>
            {this.props.editReceipt.currentReceipt.title}
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
        actions: bindActionCreators({getReceiptById, updateReceipt}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiptEdit);
