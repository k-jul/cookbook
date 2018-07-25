import React from 'react';
import { Card, Rating, Icon } from 'semantic-ui-react';

export default (changeRating, deleteHandler, history) => recipe =>
    <Card key={recipe._id} className="receipt_card">
    <Card.Content>
        <Card.Header className='card-header'>
            <span className='card-title'>{recipe.title}</span>
            <div className='icon-group'>
                <Icon
                    className='card-icon'
                    color='blue'
                    name='eye'
                    onClick={() => history.push('/recipes/view/' + recipe._id)}
                />
                <Icon
                    className='card-icon'
                    color='gray'
                    name='edit'
                    onClick={() => history.push('/recipes/edit/' + recipe._id)}
                />
                <Icon
                    className='card-icon'
                    name='delete'
                    color='red'
                    onClick={() => deleteHandler(recipe._id)}
                />
            </div>
        </Card.Header>

        <Card.Meta>
            <Rating
                icon='star'
                defaultRating={recipe.rating}
                maxRating={5}
                onRate={(e, { rating }) => changeRating({ ...recipe, rating })}
            />
        </Card.Meta>
        <Card.Description>{recipe.description}</Card.Description>
    </Card.Content>
    </Card>