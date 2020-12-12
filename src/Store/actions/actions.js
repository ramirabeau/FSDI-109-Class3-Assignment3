// action: an arrow function that returns an object

import Product from "./../../components/Product/Product";
// object contains a type of action, payload (option)
// the payload is the information we want the action to display

export const increaseCounter = () => {
    return {
        type: "INCREASE_COUNTER",
    };
};

export const addProductToCart = (Product) => {
    return {
        type: "ADD_PRODUCT",
        payload: Product,
    };
};

export const removeProductToCart = (Product) => {
    return {
        type: "REMOVE_PRODUCT",
        payload: Product,
    };
};