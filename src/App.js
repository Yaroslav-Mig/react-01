import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Technologies from './technologies';
import Footer from './footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
			<Footer />
    </div>
  );
};

export default App;
