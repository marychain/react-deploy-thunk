import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUsers } from "../../../redux/user-action";
import "./users.css"

export function Users() {
    const users = useSelector((state) => state.UserReducer.users);
    const loading = useSelector((state) => state.UserReducer.loading);
    const error = useSelector((state) => state.UserReducer.error);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(GetUsers());
    }, [dispatch]);

    return (
        <div className="Users">
            {loading && <div>Loading...</div>}
            {!loading && error && <div>Error occured</div>}
            {!loading && !error && (
            <div className="items">
                {users.map((user) => {
                    const { id, name, username, avatar } = user;
                    return (
                        <div key={id} className="items__post">
                            <div className="items__post__header">
                                <h3 className="items__post__header__name">{name}</h3>
                                <p className="items__post__header__username">{username}</p>
                            </div>
                            <div className="items__post__avatar">
                                <img className="items__post__avatar__img"
                                alt="#"
                                src={avatar}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
            )}
        </div>
    );
}
