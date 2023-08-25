import './index.less'
import { Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { Suspense, memo } from "react";
import { Outlet } from "react-router-dom";

const MayLayout = memo(() => {
  return (
    <Layout className="w-full h-full">
      <Header className="home-header h-16 bg-white flex justify-between">
        <div className="left flex items-center">
          <img className='w-[130px] h-[48px]' src="https://www.wjx.cn/images/index/wjx-logo@2x.png" alt="" />
          <ul className="tabs flex items-center list-none space-x-7">
            <li>首页</li>
            <li>应用展示</li>
            <li>企业服务</li>
            <li>样本服务</li>
            <li>问卷目标</li>
            <li>解决方案</li>
          </ul>
        </div>
        <div className="right flex items-center space-x-7">
          <div className="login">登录</div>
          <div className="registry">免费注册</div>
        </div>
      </Header>
      <Content className="w-full h-screen">
        <Suspense fallback="loading...">
          <Outlet />
        </Suspense>
      </Content>
      {/* <Footer></Footer> */}
    </Layout>
  );
});

export default MayLayout;
