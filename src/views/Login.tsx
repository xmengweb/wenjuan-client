import { memo } from "react";
import styles from "./login.module.less";
import Tab from "@/components/Tab";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import Link from "@/components/Link";

export const Login = memo(() => {
  const [form] = Form.useForm();

  const items = [
    {
      key: "1",
      label: `账号登录`,
      children: (
        <>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            form={form}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please input your Username!" }]}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input your Password!" }]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
          </Form>
        </>
      ),
    },
    {
      key: "2",
      label: `验证码登录`,
      children: `Content of Tab Pane 2`,
    },
  ];

  const onFinish = () => {
    console.log("Login Success:", form.getFieldsValue());
  };

  return (
    <div className={styles.login}>
      <div className={styles.panel}>
        <Tab items={items} />
        <div className="remember">
          <Checkbox>Remember me</Checkbox>
          <Link href="#" target="_blank">忘记密码</Link>
        </div>
        <Button type="primary" onClick={onFinish} className="login-form-button">
          登录
        </Button>
        Or <Link href="#" target="_blank">现在注册</Link>
      </div>
    </div>
  );
});

export default Login;
