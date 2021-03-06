import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/addCart',
        exact: true,
        component: require('../addCart.js').default,
      },
      {
        path: '/cart',
        exact: true,
        component: require('../cart.js').default,
      },
      {
        path: '/Detail',
        exact: true,
        component: require('../Detail.js').default,
      },
      {
        path: '/',
        exact: true,
        component: require('../index.js').default,
      },
      {
        path: '/list',
        exact: true,
        component: require('../list.js').default,
      },
      {
        path: '/login',
        exact: true,
        component: require('../login.js').default,
      },
      {
        path: '/public',
        exact: true,
        component: require('../public.js').default,
      },
      {
        path: '/register',
        exact: true,
        component: require('../register.js').default,
      },
      {
        path: '/settlement',
        exact: true,
        component: require('../settlement.js').default,
      },
      {
        component: () =>
          React.createElement(
            require('C:/Users/Panda/AppData/Roaming/npm/node_modules/umi/node_modules/_umi-build-dev@1.11.3@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('C:/Users/Panda/AppData/Roaming/npm/node_modules/umi/node_modules/_umi-build-dev@1.11.3@umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen = () => {};

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    routeChangeHandler(history.location);
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
