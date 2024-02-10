import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useAppDispatch} from "../hooks/useAppDispatch";

const Navbar: FC = () => {
    const dispatch = useAppDispatch()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const navigate = useNavigate()
    return (
        <Layout.Header>
            {isAuth ?
                <Menu style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}} theme='dark'
                      mode='horizontal'
                      selectable={false}>
                    <Menu.Item key={'name'} style={{color: 'white'}}>
                        {user.username}
                    </Menu.Item>

                    <Menu.Item
                        onClick={() => dispatch(AuthActionCreators.logout())}
                        key={1}
                    >
                        Выйти
                    </Menu.Item>
                </Menu>
                :
                <Menu style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}} theme='dark'
                      mode='horizontal'
                      selectable={false}>
                    <Menu.Item onClick={() => navigate(RouteNames.LOGIN)} key={1}>Логин</Menu.Item>
                </Menu>}


        </Layout.Header>
    );
};

export default Navbar;