import {combineReducers} from 'redux';
import recipesReducer from '../containers/Recipes/RecipesReducer';
import receiptNewReducer from '../containers/ReceiptNew/ReceiptNewReducer';
import receiptEditReducer from '../containers/ReceiptEdit/ReceiptEditReducer';
import receiptViewReducer from '../containers/ReceiptView/ReceiptViewReducer';

export default combineReducers({
    recipesReducer,
    receiptNewReducer,
    receiptEditReducer,
    receiptViewReducer
})