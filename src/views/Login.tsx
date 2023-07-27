import { memo } from "react";
import styles from './login.module.less'
import Tab from "@/components/Tab";

const items= [
  {
    key: '1',
    label: `个人用户`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `企业用户`,
    children: `Content of Tab Pane 2`,
  }
];

export const Login = memo(() => {
  
  return <div className={styles.login}>
    <div className={styles.panel}>
      <Tab items={items}/>
    </div>
  </div>;
});

export default Login;
