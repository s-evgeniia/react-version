import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes } from "../../../router/router";
import {AuthContext} from "../../../context/context";
import {Navigate} from "react-router-dom";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext)

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={<route.component/>}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                        />
                )}
                    <Route path="/*" element={<Navigate to="/items" replace />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={<route.component/>}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>
    );
};

export default AppRouter;