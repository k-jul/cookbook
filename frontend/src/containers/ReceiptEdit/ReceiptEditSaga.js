import { takeLatest, put, call, all } from "redux-saga/effects";
// import { getAllRecipes } from "./RecipesActions";
import { updateReceipt, getReceipt, getAll } from '../../api';
// import { getReceiptById } from "./ReceiptEditActions";


function* changeReceipt (action) {
    try {
        yield call(updateReceipt, action.payload);
        yield put({type: 'UPDATE_RECEIPT_SUCCESS'})
    } catch (error) {
        yield put ({type: 'UPDATE_RECEIPT_FAILED', error})
    }
}

function* getById(action) {
    try {
        const receipt = yield call(getReceipt, action.payload);
        yield put({type: 'GET_RECEIPT_BY_ID_SUCCESS', payload: receipt})
    } catch (error) {
        yield put ({type: 'GET_RECEIPT_BY_ID_FAILED', error})
    }
}

function* fetchAll (action) {
    try {
        const allRecipes = yield call(getAll, {})
        yield put({type: 'GET_ALL_RECIPES_SUCCESS', payload: allRecipes})
    } catch (error) {
        yield put ({type: 'GET_ALL_RECIPES_FAILED', error})
    }
   }

export default function* recipesSaga() {
    yield all ([
        takeLatest('UPDATE_RECEIPT', changeReceipt),
        takeLatest('GET_RECEIPT_BY_ID', getById),
        takeLatest('UPDATE_RECEIPT_SUCCESS', fetchAll)
    ])
}