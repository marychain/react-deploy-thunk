import { ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_ERROR } from "./types";

export const AddUserAction = (props) => async (dispatch, getState) => {
    
    const data = props;

    const response = await fetch("http://domer.tech:9999/users/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
        },
        body: JSON.stringify(data),
    });
    
    const user = await response.json();
    
    dispatch({
        type: ADD_USER_REQUEST,
        payload: user
    });
    
    if (!response.ok) {
        dispatch({
            type: ADD_USER_ERROR,
            payload: user
        });
        return;
    }

    dispatch({
        type: ADD_USER_SUCCESS,
        payload: user
    });
};


