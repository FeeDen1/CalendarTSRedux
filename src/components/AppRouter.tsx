import React, {FC} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../routes";
import {useTypedSelector} from '../hooks/useTypedSelector'
const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map((route) => (
                    <Route path={route.path}
                           element={<route.component/>}
                           key={route.path}/>))}
                <Route path="*"
                       element={<Navigate to='/' replace/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route) => (
                    <Route path={route.path}
                           element={<route.component/>}
                           key={route.path}/>))}
                <Route path="*"
                       element={<Navigate to='/login' replace/>}/>
            </Routes>
    );
}
    ;


    export default AppRouter;