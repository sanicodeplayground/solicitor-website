import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage';
import NewsPage from './components/pages/NewsPage';
import ServicesPage from './components/pages/ServicesPage';
import FooterSection from './components/shared/FooterSection';
import Header from './components/shared/Header';

const App = () => {
  return (
    <Router basename="/solicitor-website">
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;
