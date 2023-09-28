import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context/context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', ' ')
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Add your login"></MyInput>
                <MyInput type="password" placeholder="Add your password"></MyInput>
                <MyButton>Submit</MyButton>
            </form>
        </div>
    );
};

export default Login;