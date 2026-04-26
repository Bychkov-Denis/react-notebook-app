import { LoadingOutlined } from '@ant-design/icons';
import { Spin, theme, Typography } from 'antd';

const { Paragraph } = Typography;

const LoadingPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorBgContainer,
      }}
    >
      <Paragraph style={{ fontSize: '24px' }}>Loading...</Paragraph>
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
        size="large"
      />
    </div>
  );
};

export default LoadingPage;
