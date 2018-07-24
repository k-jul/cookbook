import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Input, Card, Rating, Button } from 'semantic-ui-react';

import {getAllRecipes} from './RecipesActions';
import './Recipes.css';

const getRecipeCard = (recipe) =>
    <Card key={recipe._id} className="receipt_card">
        <Card.Content>
            <Card.Header>{recipe.title}</Card.Header>
            <Card.Meta><Rating  icon='star' defaultRating={recipe.rating} maxRating={5}/></Card.Meta>
            <Card.Description>{recipe.description}</Card.Description>
        </Card.Content>
    </Card>

const filterFunction = inputValue => elem => 
    elem.title.toLowerCase().includes(inputValue.toLowerCase()) 
    || elem.description.toLowerCase().includes(inputValue.toLowerCase())

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
                <Button positive>Add</Button>
                <Card.Group centered>
                {this.state.searchResult.length && this.state.searchResult.filter(filterFunction(this.state.inputValue)).map(getRecipeCard)}
                </Card.Group>
            </main>
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
        actions: bindActionCreators({getAllRecipes}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
