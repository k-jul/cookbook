import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'semantic-ui-react';

import {getReceiptById} from '../ReceiptEdit/ReceiptEditActions';
import './ReceiptView.css';


class ReceiptEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialString: 'View receipt',
        }
    }

    componentWillMount() {
        this.props.actions.getReceiptById(this.props.match.params.id)
    }

    render() {
        return <Container>
            {this.props.viewReceipt.currentReceipt.title}
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
