import { Component } from 'react';
import { Form, Input, Button} from 'antd';
import { connect } from 'react-redux';
import './index.less';

interface IProps{

};
interface IState{
    addUser:{
        username:string,
        email:string,
        password:string,
        confirm?:string
    }
};
const mapStateToProps = (addUser:any) => {
    const username = addUser.username;
    const email = addUser.email;
    const password = addUser.password;
    return{
        userName:username,
        email:email,
        password:password
    }

}

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };
class Signup extends Component<IProps,IState> {
    
    public constructor(props:IProps){
        super(props);
        this.state={
            addUser:{
                username:"",
                email:"",
                password:"",
                confirm:"",
            }
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    public handleSubmit(){
        // setTimeout(()=>{
        //     console.log(this.state.addUser)
        // },0);


    };
    public back(){
        window.location.href="/login";
    };  
    public render() {
        const onFinish = (values: any) => {
            // console.log('Success:', values);
            this.setState({
                addUser:{...values}
            });
          };
        
        const onFinishFailed = (errorInfo: any) => {
            console.log('Failed:', errorInfo);
          };
          return (
                <div className="signup">
                <h1 className="signup-title">Input Signup Information</h1>
                <Form
                className="login-form"
                {...layout}
                name="basic"
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
                    name="email"
                    label="E-mail"
                    rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your E-mail!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" onClick={this.handleSubmit} >
                    Submit
                    </Button>
                    <Button className="back" onClick={this.back}>
                    Back
                    </Button>
                </Form.Item>
                </Form>
            </div>
            )
        }
}

export default connect(mapStateToProps, null)(Signup)