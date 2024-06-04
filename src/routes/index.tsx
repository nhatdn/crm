import Pages from '@/pages';
import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { ROUTES_PATH } from '@/constants';
const routeList: RouteObject[] = [
  {
    path: ROUTES_PATH.LOGIN,
    element: <Pages.Login/>
  },
]

const RenderRouter: React.FC = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;
