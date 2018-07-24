import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Input, Card, Button } from 'semantic-ui-react';

import { getAllRecipes } from './RecipesActions';
import { updateReceipt } from '../ReceiptEdit/ReceiptEditActions';
import getRecipeCard from '../../components/recipeCard';
import './Recipes.css';

const filterFunction = inputValue => elem =>
    new RegExp(inputValue, 'i').test(elem.title)
    || new RegExp(inputValue, 'i').test(elem.description);

const comparatorFn = (a, b) => {
    const rateA = a.rating || 0;
    const rateB = b.rating || 0;
    return rateB - rateA;
}

class Recipes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResult: [],
            inputValue: ''
        }
    }

    componentWillMount() {
        this.props.actions.getAllRecipes()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            searchResult: nextProps.recipes
        })
     
    }

    render() {
        return <Container>
            <main className="main">
                <Input fluid icon='search' placeholder='Search...' className="search" onInput={evt => this.setState({
                    inputValue: evt.target.value
                })}/>
                <Button positive onClick={() => this.props.history.push('/recipes/new')}>Add</Button>
                <Card.Group centered>
                {this.state.searchResult.length
                    && this.state.searchResult
                            .filter(filterFunction(this.state.inputValue))
                            .sort(comparatorFn)
                            .map(getRecipeCard(this.props.actions.updateReceipt))}
                </Card.Group>
            </main>
        </Container>
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipesReducer.recipes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({ getAllRecipes, updateReceipt }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
