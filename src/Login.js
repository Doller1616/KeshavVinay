import React, { useContext } from 'react';
import axios from 'axios';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { SuperContext } from './SuperContainer';


const LoginPage = () => {
  const { dispatch } = useContext(SuperContext);

  const onFinish = async (values) => {
    const res = await axios.post('https://reqres.in/api/login', values);
    localStorage.setItem('token', res.data?.token);
    dispatch({ access: res.data?.token, userInfo: {} })
  }; 

  return (<div style={{ display: 'grid', placeContent: 'center', height: '92vh' }}>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        initialValue='eve.holt@reqres.in'
        rules={[{ required: true, message: 'Please input your Username!'}]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        initialValue="cityslicka"
        rules={[{ required: true, message: 'Please input your Password!'}]}
      >
      <Input prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" >
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a >register now!</a>
      </Form.Item>
    </Form>
</div> );
};

export default LoginPage