import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context/context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Logout
            </MyButton>
            <div className="navbar__links">
                <Link to="/about">About us</Link>
                <Link to="/items">All Items</Link>
                <Link to="/shipping_payment">Shipping and payment</Link>
                <Link to="/basket">Basket</Link>
            </div>
        </div>
    );
};

export default Navbar;