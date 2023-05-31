import React from 'react';
import Header from './components/shared/Header';

import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage';
import NewsPage from './components/pages/NewsPage';
import ServicesPage from './components/pages/ServicesPage';

const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <AboutPage />
      <ContactPage />
      <NewsPage />
      <ServicesPage />
      {/* Add other components and routes as needed */}
    </div>
  );
}

export default App;
