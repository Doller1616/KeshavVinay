import { Layout, theme } from 'antd';
import { Suspense, useContext, useEffect, useState } from 'react';
import BreadcrumbX from './components/BreadcrumbX';
import FooterX from './components/FooterX';
import Headers from './components/HeadersX'
import SidemenuX from './components/SidemenuX';
import LoginPage from './Login';
import { SuperContext } from './SuperContainer'
const { Content } = Layout;

const MainLayout = ({pages}) => {
  const { userInfo } = useContext(SuperContext);
  const { access } = userInfo;
  
  return ( !access ? <LoginPage /> :
    <Layout style={{ minHeight: '90vh' }}>
     <SidemenuX />
      <Layout className="site-layout">
        <Headers />
        <Content style={{ margin: '0 16px'}} >
         <BreadcrumbX />
          <Suspense fallback={<b> Loading... </b>}>
          { pages }
          </Suspense>
        </Content>
      <FooterX />
      </Layout>
    </Layout>
  );
};
export default MainLayout;
