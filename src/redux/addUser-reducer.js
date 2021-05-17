import { ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_ERROR } from "./types";

const initialState = {
    user: {},
    loading: false,
    error: null
    };

export const AddUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_REQUEST:
        return {
            ...state,
            user: action.payload,
            loading: true
        };
        case ADD_USER_SUCCESS:
        return {
            ...state,
            user: action.payload,
            loading: false
        };
        case ADD_USER_ERROR:
        return {
            ...state,
            loading: false,
            error: action.payload
        };
        default:
        return state;
    }
};