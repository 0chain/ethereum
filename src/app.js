import React, { Component } from 'react';
import { Layout } from "./components/layouts/Layout";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageLayout from './components/layouts/Page';
import ZeroChainFooter from './components/footer';
import ZeroChainHeader from './components/header';
import HomeScreen from './routes/HomeScreen';
import './App.css';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
        <Layout>
          <div className="text-center">
          <header className="0Chain-header">
              <ZeroChainHeader />
            </header>
            <Switch>
              <Route
                exact
                path="/"
                render={props => {
                  return <PageLayout content={<HomeScreen {...props} />} />;
                }}
              />
            </Switch>
          </div>
        </Layout>
        <footer className="0Chain-footer">
            <ZeroChainFooter />
        </footer>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;