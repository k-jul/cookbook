const initialState = {
    recipes: []
    
}

const recipesReducer = (state = initialState, action) => {
    if (!action) return state;
    switch(action.type) {
        case 'GET_ALL_RECIPES_SUCCESS': 
            return {
                ...state,
                recipes: action.payload
            }
        default: return state;
    }
}

export default recipesReducer



