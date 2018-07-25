const initialState = {
    addedSuccess: false
};

const receiptNewReducer = (state = initialState, action) => {
    if (!action) return state;
    switch(action.type) {
        case 'ADD_NEW_RECEIPT_SUCCESS': 
            return {
                ...state,
                addedSuccess: true
            }
        case 'SWITCH_ADDED':
            return {
                ...state,
                addedSuccess: action.payload
            }
        default: return state;
    }
}

export default receiptNewReducer