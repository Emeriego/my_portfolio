// src/components/GitHubActivity.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './githubActivity.css'; // Optional CSS styling

const GitHubActivity = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/users/Emeriego/events'
        );
        setEvents(response.data.slice(0, 5)); // Fetch last 5 activities
      } catch (error) {
        console.error("Error fetching GitHub activity:", error);
      }
    };

    fetchGitHubActivity();
  }, []);

  return (
    <div className="github-activity">
      <h2>My GitHub Activities</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.type}</strong> on{' '}
            <a href={event.repo.url.replace('api.', '').replace('repos/', '')}>
              {event.repo.name}
            </a>
            <p>{new Date(event.created_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubActivity;
