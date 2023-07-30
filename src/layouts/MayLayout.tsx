import { Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { Suspense, memo } from "react";
import { Outlet } from "react-router-dom";

const MayLayout = memo(() => {
  return (
    <Layout className="w-full h-full">
      <Header className="h-16 bg-white flex justify-between">
        <div>问卷星</div>
        <div>我的问卷</div>
      </Header>
      <Content className="w-full h-full">
        <Suspense fallback="loading...">
          <Outlet />
        </Suspense>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
});

export default MayLayout;
