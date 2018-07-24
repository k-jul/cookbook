export const addNewReceipt = (data) => ({
    type: 'ADD_NEW_RECEIPT',
    payload: data
});

export const switchAdded = (bool) => ({
    type: 'SWITCH_ADDED',
    payload: bool
});