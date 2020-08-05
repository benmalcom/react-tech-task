import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import './stylesheets/app.scss';
import Progress from './components/Progress';
import Home from './containers/Home';
import ErrorBoundary from './components/ErrorBoundary';


const App = ({}) => {
  useEffect(() => {
  }, []);
  return (<>
      <Suspense fallback={<Progress style={{ top: '60%', left: '50%' }}/>}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home}/>
            <Redirect to="/"/>
          </Switch>
        </BrowserRouter>
      </Suspense>
  </>);
};

export default App;
