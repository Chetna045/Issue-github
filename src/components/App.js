import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import IssueList from './IssueList';
import IssueDetails from './IssueDetails';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<IssueList />} />
          <Route path="/issues/:id" element={<IssueDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
