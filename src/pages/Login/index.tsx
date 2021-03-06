import { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import './index.less'

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

class Login extends Component {
   
    public handleSignup(){
        window.location.href='/signup';
    }

    public render() {
        const onFinish = (values: any) => {
            console.log('Success:', values);
          };
        
        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
          };
        return (
            <div className="login">
            <h1 className="title">Welcome</h1>
            <Form
            className="login-form"
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
                <Button className="sigup-bnt" onClick={this.handleSignup}>
                Sigup
                </Button>
            </Form.Item>
            </Form>
            </div>
        )
    }
}
export default Login