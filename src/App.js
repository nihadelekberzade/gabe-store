import React from 'react';
import Footer from './layout/Footer';
import Header from "./layout/Header";
import HomePage from './pages/HomePage';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './sass/css/styles.scss';


const App = () => (
  <>
    <Header />
    <HomePage />
    <Footer />
  </>
)
export default App;
