import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function IssueDetails() {
  const { id } = useParams();
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    fetchIssue();
  }, []);

  const fetchIssue = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/freeCodeCamp/freeCodeCamp/issues/${id}`
      );
      setIssue(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!issue) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 id="id1">{issue.title}</h1>
      <p id="id2">{issue.body}</p>
    </div>
  );
}

export default IssueDetails;
