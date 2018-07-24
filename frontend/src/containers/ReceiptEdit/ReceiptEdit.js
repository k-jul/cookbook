import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from 'semantic-ui-react';

// import {addNewReceipt} from './RecipesNewActions';
import './ReceiptEdit.css';


class Recipes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialString: 'edit receipt',
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
        actions: bindActionCreators({}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
