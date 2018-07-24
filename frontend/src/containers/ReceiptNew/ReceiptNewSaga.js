import { takeLatest, put, call, all } from "redux-saga/effects";
// import { getAllRecipes } from "./RecipesActions";
import { addReceipt } from '../../api';


function* addNewReceipt (action) {
 try {
     yield call(addReceipt, action.payload);
     yield put({type: 'ADD_NEW_RECEIPT_SUCCESS'})
 } catch (error) {
     yield put ({type: 'ADD_NEW_RECEIPT_FAILED', error})
 }
}

export default function* recipesSaga() {
    yield all ([
        takeLatest('ADD_NEW_RECEIPT', addNewReceipt)
    ])
}