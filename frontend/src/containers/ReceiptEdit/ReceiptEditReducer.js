const initialState = {
    currentReceipt: {},
    updatedSuccess: false
};

const receiptEditReducer = (state = initialState, action) => {
    if (!action) return state;
    switch(action.type) {
        case 'UPDATE_RECEIPT_SUCCESS': 
            return {
                ...state,
                updatedSuccess: true
            }
        case 'GET_RECEIPT_BY_ID_SUCCESS':
            return {
                ...state,
                currentReceipt: action.payload
            }
        case 'SWITCH_ADDED_UPDATE':
            return {
                ...state,
                updatedSuccess: action.payload
            }
        default: return state;
    }
}

export default receiptEditReducer