import { Route, Routes } from 'react-router-dom';
import { appRoutes } from '../routes.jsx';
import { MAIN_ROUTE } from '../utils/consts';
import MainLayout from './MainLayout';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={MAIN_ROUTE} element={<MainLayout />}>
        {appRoutes.map(({ path, element }) => {
          return (
            <Route
              key={path}
              element={element}
              path={path}
              index={path === MAIN_ROUTE ? true : false}
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default AppRouter;
