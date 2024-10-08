import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GitHubContributions = () => {
  return (
    <div className="github-contributions">
      <h2>My GitHub Contribution Chart</h2>
      <GitHubCalendar username="Emeriego" />
    </div>
  );
};

export default GitHubContributions;
