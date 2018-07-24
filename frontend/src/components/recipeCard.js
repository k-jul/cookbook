import React from 'react';
import { Card, Rating } from 'semantic-ui-react';

export default (changeRating) => recipe =>
    <Card key={recipe._id} className="receipt_card">
    <Card.Content>
        <Card.Header>{recipe.title}</Card.Header>
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