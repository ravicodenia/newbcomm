import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './index';
import Header from '../Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes for other pages as needed */}
      </Routes>
    </>
  );
};

export default App;
