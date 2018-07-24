import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'semantic-ui-react';

import {addNewReceipt} from './ReceiptNewActions';
import './ReceiptNew.css';


class Recipes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialString: 'new receipt',
        }
    }

    componentWillMount() {
        // this.props.actions.getReceiptById()
    }

    render() {
        return <Container>
            {this.state.initialString}
        </Container>
    }
}

const mapStateToProps = state => {
    console.log(state, 'state....')
    return {
        recipes: state.recipesReducer.recipes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({addNewReceipt}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
