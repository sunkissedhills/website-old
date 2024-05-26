import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bio from './components/Bio';
import Main from './components/Main';
import Contact from './components/Contact';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;
