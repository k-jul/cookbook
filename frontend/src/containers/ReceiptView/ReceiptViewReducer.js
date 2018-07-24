const initialState = {
    currentReceipt: {}
};

const ReceiptViewReducer = (state = initialState, action) => {
    if (!action) return state;
    switch(action.type) {
        case 'GET_RECEIPT_BY_ID_SUCCESS':
            return {
                ...state,
                currentReceipt: action.payload
            }
        default: return state;
    }
}

export default ReceiptViewReducer