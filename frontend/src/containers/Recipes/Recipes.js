import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Input, Card, Rating } from 'semantic-ui-react';

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

class Recipes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialString: 'hello',
            currentRecipe: {}
        }
    }

    componentWillMount() {
        this.props.actions.getAllRecipes()
    }

    render() {
        return <Container>
            <main className="main">
                <Input fluid icon='search' placeholder='Search...' className="search"/>
                <Card.Group centered>
                    {this.props.recipes.length && this.props.recipes.map(getRecipeCard)}
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
