import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_ERROR } from "./types";

export const GetUsers = () => async (dispatch, getState) => {
    dispatch({
        type: GET_USERS_REQUEST
    });
    
    const response = await fetch("http://domer.tech:9999/users/");
    const dataObject = await response.json();
    const data = dataObject.data;
    
    if (!response.ok) {
        dispatch({
            type: GET_USERS_ERROR,
            payload: data
        });
        return;
    }

    dispatch({
        type: GET_USERS_SUCCESS,
        payload: data
    });
};


