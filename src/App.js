import React from 'react';
import Footer from './layout/Footer';
import Header from "./layout/Header";
import Promo from './layout/Promo';
import HomePage from './pages/HomePage';
import './sass/css/style.scss';


const App = () => {
  return (
    <>
      <Header />
      <Promo />
      <HomePage />
      <Footer />
    </>
  );
}
export default App;
