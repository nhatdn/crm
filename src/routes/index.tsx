import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

const routeList: RouteObject[] = [
  
]

const RenderRouter: React.FC = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;
