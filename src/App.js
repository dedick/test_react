import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/gnome/:slug" component={DetailPage} />
            <Redirect to="/" />
          </Switch>
        </Router>
      </Container>
    </div>
  );
};

export default App;