import { memo } from "react";
import styles from "./login.module.less";
import Tab from "@/components/Tab";
import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const items = [
  {
    key: "1",
    label: `账号登录`,
    children: (
      <>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off">
          <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
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

export const Login = memo(() => {
  return (
    <div className={styles.login}>
      <div className={styles.panel}>
        <Tab items={items} />
      </div>
    </div>
  );
});

export default Login;
