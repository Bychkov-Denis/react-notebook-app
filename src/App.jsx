import { App as AntApp, ConfigProvider, theme } from 'antd';
import { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import LoadingPage from './pages/LoadingPage';
import './reset.css';

const App = () => {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          fontSize: 16,
          colorBgContainer: '#191919',
        },
        components: {
          Layout: {
            headerBg: '#191919',
            siderBg: '#191919',
            footerBg: '#191919',
            bodyBg: '#191919',
          },
          Menu: {
            darkItemBg: '#191919',
            darkItemSelectedBg: '#1D1F21',
          },
        },
      }}
    >
      <AntApp>
        <HashRouter>
          <Suspense fallback={<LoadingPage />}>
            <AppRouter />
          </Suspense>
        </HashRouter>
      </AntApp>
    </ConfigProvider>
  );
};
export default App;
