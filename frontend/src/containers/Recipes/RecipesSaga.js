import { takeLatest, put, call, all } from "redux-saga/effects";
// import { getAllRecipes } from "./RecipesActions";
import {getAll, deleteReceipt} from '../../api';

function* fetchAll (action) {
    try {
        const allRecipes = yield call(getAll, {})
        yield put({
            type: 'GET_ALL_RECIPES_SUCCESS',
            payload: allRecipes
        });
    } catch (error) {
        yield put({
            type: 'GET_ALL_RECIPES_FAILED',
            error
        });
    }
}

function* removeReceipt (action) {
    try {
        yield call(deleteReceipt, action.payload);
        yield put({
            type: 'REMOVE_RECEIPT_SUCCESS'
        })
    } catch (error) {
        yield put({
            type: 'REMOVE_RECEIPT_FAILED',
            error
        });
    }
}

export default function* recipesSaga() {
    yield all ([
        takeLatest('GET_ALL_RECIPES', fetchAll),
        takeLatest('DELETE_RECEIPT', removeReceipt),
        takeLatest('REMOVE_RECEIPT_SUCCESS', fetchAll)
    ])
}