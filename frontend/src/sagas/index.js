import {all, fork} from 'redux-saga/effects';
import recipesSaga from '../containers/Recipes/RecipesSaga';
import receiptNewSaga from '../containers/ReceiptNew/ReceiptNewSaga';
import receiptEditSaga from '../containers/ReceiptEdit/ReceiptEditSaga';

export default function* sagas() {
    yield all([
        fork(recipesSaga),
        fork(receiptNewSaga),
        fork(receiptEditSaga)
    ])
}