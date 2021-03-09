import React from 'react';
import {Switch, Route } from 'react-router-dom';

import Todos from '../pages/Todos';
import CreateTodo from '../pages/CreateTodo'



const Routes: React.FC = () => (
    <Switch>
      <Route path="/" exact component={Todos}/>
      <Route path="/createtodo" component={CreateTodo} />
    </Switch>
);

export default Routes;