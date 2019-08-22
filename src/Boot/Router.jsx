import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import WorkPage from '../Pages/WorkPage';
import Table from '../Pages/Table';

// ТУТ НИЧЕГО НЕТУ НЕ СМОТРИ СЮДА
// const Home = lazy(() => import('../Pages/Home'));
// const WorkPage = lazy(async () => {
//     await new Promise(resolve => setTimeout(resolve, 3000));
//     return import('../Pages/WorkPage');
// });
// НОС Suspense fallback={<Loader />

function Router() {
    return (
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={WorkPage} />
          <Route path="/table" component={Table} />
      </Switch>
    );
}

export default Router;
