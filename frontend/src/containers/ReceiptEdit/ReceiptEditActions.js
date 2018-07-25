export const updateReceipt = (data) => ({
    type: 'UPDATE_RECEIPT',
    payload: data
});

export const getReceiptById = (id) => ({
    type: 'GET_RECEIPT_BY_ID',
    payload: id
});

export const switchAddedUpdate = (bool) => ({
    type: 'SWITCH_ADDED_UPDATE',
    payload: bool
});