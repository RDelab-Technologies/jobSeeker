import React from 'react';

function ClosedComponent() {
  // Replace this with your actual job data or API fetch logic for closed jobs
  const closedJobs = [
    { id: 1, title: 'Job 8', status: 'Closed' },
    { id: 2, title: 'Job 9', status: 'Closed' },
    // Add more job listings for "Closed" status
  ];

  return (
    <div>
      <h2>Closed</h2>
      <ul>
        {closedJobs.map((job) => (
          <li key={job.id}>
            {job.title} - Status: {job.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClosedComponent;
