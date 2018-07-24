import { takeLatest, put, call, all } from "redux-saga/effects";
// import { getAllRecipes } from "./RecipesActions";
import {getAll} from './RecipesApi'


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
        takeLatest('GET_ALL_RECIPES', fetchAll)
    ])
}