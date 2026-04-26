import { GithubOutlined } from '@ant-design/icons';
import { Flex, Layout, Menu, theme, Typography } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { appRoutes } from '../routes';
import { MAIN_ROUTE } from '../utils/consts';
import ThemeNavigation from './ThemeNavigation';
const { Header, Content, Footer, Sider } = Layout;

const { Title, Link } = Typography;

const siderStyle = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const items = appRoutes.slice(1, -1).map(({ key, path, navLinkText }) => {
  return {
    key,
    label: <NavLink to={path}>{navLinkText}</NavLink>,
  };
});

const MainLayout = () => {
  const {
    token: { colorBgContainer, colorText },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: '10px 16px',
          }}
        >
          <Flex gap="small" align="center" justify="space-between">
            <NavLink to={MAIN_ROUTE}>
              <Title style={{ margin: 0 }}>React Notebook App</Title>
            </NavLink>
            <Link
              href="https://github.com/Bychkov-Denis/react-notebook-app"
              target="_blank"
            >
              <GithubOutlined style={{ fontSize: '35px', color: colorText }} />
            </Link>
          </Flex>
        </Header>
        <Content
          style={{
            padding: '24px 16px 0',
            overflow: 'initial',
            backgroundColor: colorBgContainer,
          }}
        >
          <Outlet />
          <ThemeNavigation />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
