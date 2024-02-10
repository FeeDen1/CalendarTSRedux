import React, {FC, useState} from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {useTypedSelector} from "../hooks/useTypedSelector";

const LoginForm: FC = () => {
    const dispatch = useAppDispatch()
    const {error, isLoading} = useTypedSelector(state => state.auth)
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const submit = () => {
        dispatch(AuthActionCreators.login(username, password))
    }
    return (
        <Form
            onFinish={submit}
            name="basic"

            style={{maxWidth: 600}}
            initialValues={{remember: true}}

            autoComplete="off"
        >
            {error && <div style={{color: 'red'}}>
                {error}
            </div>}
            <Form.Item
                style={{width: '400px'}}
                label="Имя пользователя"
                name="username"
                rules={[rules.required('Пожалуйста, введите имя пользователя!')]}
            >
                <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required('Пожалуйста, введите пароль!')]}
            >
                <Input.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </Form.Item>

            <Form.Item
                name="remember"
                style={{marginBottom: '10px'}}
                valuePropName="checked"
            >
                <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;