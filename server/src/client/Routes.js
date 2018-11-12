//this will be a shared resource between client and server side

import React from 'react';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import App from './App'
import UsersListPage from './pages/UsersListPage';
import AdminsListPage from './pages/AdminsListPage';

//necessary for SSR
export default [
  {
    ...App, 
    routes: [
      //nested routes
      {//same props as normal but defined in object
        ...HomePage,
        // pulls the component out of the HomePage object. equivilent of component: 'Homepage' from before
        path: '/',
        exact: true
      },
      {
        ...AdminsListPage, 
        path: '/admins'
      },
      {
        ...UsersListPage, 
        path: '/users'
      },
      {
        ...NotFoundPage, 
      }
    ]
  }
];

//OLD JSX way which will not work with Redux 
// export default () => {
//     return (
//       <div>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/hi" component={() => "hi"} />
//         <Route path="/users" component={UsersList} />
//       </div>
//     );
//   };