import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './pages/Home';
import List from './pages/List';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/list/:id" component={List} />
    </Route>
    );
