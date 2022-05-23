import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Menu from './components/Menu';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  return (
    <div className="container">
     <Menu/>
      <HashRouter>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
