import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_ERROR } from "./types";

const initialState = {
    users: [],
    loading: false,
    error: null
};

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
        return {
            ...state,
            users: action.payload,
            loading: true
        };
        case GET_USERS_SUCCESS:
        return {
            ...state,
            users: action.payload,
            loading: false
        };
        case GET_USERS_ERROR:
        return {
            ...state,
            users: [],
            loading: false,
            error: action.payload
        };
        default:
        return state;
    }
};