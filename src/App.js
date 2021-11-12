import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from './theme';

import Header from './components/Header';

import Playground from './pages/Playground';
import People from './pages/People';
import EditPeople from './pages/EditPeople';
import AddPeople from './pages/AddPeople';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/people" exact>
            <People />
          </Route>
          <Route path="/people/new">
            <AddPeople />
          </Route>
          <Route path="/people/edit/:id">
            <EditPeople />
          </Route>
          <Route path="/playground">
            <Playground />
          </Route>
          <Route path="*">
            <Redirect to="/people" />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
