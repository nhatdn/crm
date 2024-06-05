import React, { useEffect } from 'react';
import { RouteObject, useNavigate, useRoutes } from 'react-router-dom';

import { ROUTES_PATH } from '@/constants';
import Layouts from '@/layouts';
import Pages from '@/pages';

const routeList: RouteObject[] = [
  {
    path: ROUTES_PATH.LOGIN,
    element: <Pages.Login />
  },
  {
    path: '',
    element: (
      <Layouts.Auth auth>
        <Layouts.Primary />
      </Layouts.Auth>
    ),
    children: [
      {
        path: ROUTES_PATH.FILTER,
        element: <Pages.Filter />
      },
    ]
  },
  {
    path: ROUTES_PATH.OFFLINE,
    element: <Pages.Offline />
  },
  {
    path: ROUTES_PATH.NOT_FOUND,
    element: <Pages.NotFound />
  }
]

const RenderRouter: React.FC = () => {
  // we could to check network connection at here
  // if users lost connection, we should to redirect to lost connection page
  const navigate = useNavigate();
  useEffect(() => {
    self.addEventListener('offline', () => {
      navigate(ROUTES_PATH.OFFLINE);
    })
    return () => self.removeEventListener('offline', () => { });
  }, [navigate]);
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;
