//this will be a shared resource between client and server side

import React from 'react';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
// import AdminsListPage, { loadData } from './pages/AdminsListPage';

//necessary for SSR
export default [
  {//same props as normal but defined in object
    ...HomePage,
    // pulls the component out of the HomePage object. equivilent of component: 'Homepage' from before
    path: '/',
    exact: true
  },
  {
    ...UsersListPage, 
    path: '/users'
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