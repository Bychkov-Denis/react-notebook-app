import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Paragraph, Link } = Typography;

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  console.log(location);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paragraph strong style={{ fontSize: '48px' }}>
        404 Page Not Found
      </Paragraph>
      <Link onClick={goBack} style={{ fontSize: '35px' }}>
        Вернуться назад
      </Link>
    </div>
  );
};

export default NotFoundPage;
