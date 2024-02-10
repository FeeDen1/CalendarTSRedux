import React, {FC, useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import LoginForm from "./components/LoginForm";
import {useAppDispatch} from "./hooks/useAppDispatch";
import {AuthActionCreators} from "./store/reducers/auth/action-creators";
import {IUser} from "./models/IUser";

const App: FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        if(localStorage.getItem('auth')) {
            dispatch(AuthActionCreators.setUser({username: localStorage.getItem('username')} as IUser));
            dispatch(AuthActionCreators.setIsAuth(true));
        }
    },[])

  return (
      <Layout>
          <Navbar/>
          <Layout.Content>
              <AppRouter/>
          </Layout.Content>

      </Layout>
  );
};

export default App;
