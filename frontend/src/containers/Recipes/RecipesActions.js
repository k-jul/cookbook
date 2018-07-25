export const getAllRecipes = () => ({
    type: 'GET_ALL_RECIPES'
});

export const deleteReceipt = (id) => ({
        type: 'DELETE_RECEIPT',
        payload: id
    }
);
