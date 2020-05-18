import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, LeftMenu } from '../pages';
import { Auth } from '../auth';
import '../cmpntStyle/body.css';

const Body = () => {
  console.log('body called');
  return (
    <div className="main">
      <LeftMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <Route path="/about/:name" component={About} />
        <Route path="/posts" component={Posts} />
        <Route render={() => <h1>Page Not Found</h1>} />
      </Switch>
    </div>
  );
};

export default Body;
