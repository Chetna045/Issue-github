import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function IssueList() {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchIssues();
  }, [page]);

  const fetchIssues = async () => {
    try {
      const response = await axios.get(
        'https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues',
        {
          params: {
            state: 'open',
            per_page: 10,
            page: page,
          },
        }
      );
      setIssues(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div id="listDiv">
      <h1>freeCodeCamp</h1>
      <h3>Issues</h3>
      <ul>
        {issues.map((issue) => (
          <li id="x" key={issue.id}>
            <Link to={`/issues/${issue.number}`}>{issue.title}</Link>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => handlePageChange(page + 1)}>Next</button>
      </div>
    </div>
  );
}

export default IssueList;
