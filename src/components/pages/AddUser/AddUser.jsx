import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AddUserAction } from "../../../redux/addUser-action";
import "./addUser.css"

export const AddUserForm = () => {
    
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        name: useSelector((state) => state.AddUserReducer.user.name),
        username: useSelector((state) => state.AddUserReducer.user.username),
        avatar: useSelector((state) => state.AddUserReducer.user.avatar)
    });

    useEffect(() => {
        dispatch(AddUserAction());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(AddUserAction(user))
        e.target.reset();
    };

    const handleChangeInputs = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    };

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                    <h2 className='form__head'>Input public data</h2>
                    <div className='form__items'>
                        <div className='items__fields'>
                            <div>
                            <input type='text'  name='name' className='form__items__input' placeholder='Input name*' value={user.name}
                                    onChange={handleChangeInputs}/>
                            </div>
                        </div>
                        <div className='items__fields'>
                            <div>
                            <input type='text'  name='username' className='form__items__input' placeholder='Input username with @*' value={user.username}
                                    onChange={handleChangeInputs}/>
                            </div>
                        </div>
                        <div className='items__fields'>
                            <div>
                            <input type='text'  name='avatar' className='form__items__input' placeholder='Input link*' value={user.avatar}
                                    onChange={handleChangeInputs}/>
                            </div>
                        </div>
                    </div>                  
                    <button type="submit" className='form__btn'>Add</button>
            </form>
        </div>
    );
};
