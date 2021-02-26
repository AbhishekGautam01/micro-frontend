import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import AuthApp from './components/AuthApp';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
