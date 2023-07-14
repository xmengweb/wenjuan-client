import { Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { Suspense, memo } from "react";
import { Outlet } from "react-router-dom";

const MayLayout = memo(() => {
  return (
    <Layout>
      <Header className="h-16 bg-white">Header</Header>
      <Content>
        <Suspense fallback="loading...">
          <Outlet />
        </Suspense>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
});

export default MayLayout;
