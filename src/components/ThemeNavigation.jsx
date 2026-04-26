import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Flex, Typography } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { appRoutes } from '../routes';

const { Text } = Typography;

const ThemeNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationRoutes = appRoutes.filter(
    route => route.path !== '*' && route.navLinkText,
  );

  const indexOfCurrentRoute = navigationRoutes.findIndex(
    route => route.path === location.pathname,
  );

  const prevRoute =
    indexOfCurrentRoute > 0 ? navigationRoutes[indexOfCurrentRoute - 1] : null;
  const nextRoute =
    indexOfCurrentRoute < navigationRoutes.length - 1
      ? navigationRoutes[indexOfCurrentRoute + 1]
      : null;

  const goToPrevRoute = () => {
    if (prevRoute) {
      navigate(prevRoute.path);
    }
  };

  const goToNextRoute = () => {
    if (nextRoute) {
      navigate(nextRoute.path);
    }
  };

  return (
    <Flex justify="space-between" align="center" style={{ marginTop: '40px' }}>
      <Button
        onClick={goToPrevRoute}
        disabled={!prevRoute}
        icon={<LeftOutlined />}
      >
        {prevRoute ? prevRoute.navLinkText : 'Start'}
      </Button>
      <Text>
        {indexOfCurrentRoute + 1} / {navigationRoutes.length}
      </Text>
      <Button
        onClick={goToNextRoute}
        disabled={!nextRoute}
        icon={<RightOutlined />}
      >
        {nextRoute ? nextRoute.navLinkText : 'The End'}
      </Button>
    </Flex>
  );
};

export default ThemeNavigation;
