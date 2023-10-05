import React from 'react';

function OpeningsComponent() {
  // Replace this with your actual job data or API fetch logic
  const openings = [
    { id: 1, title: 'Job 5', status: 'Open' },
    { id: 2, title: 'Job 6', status: 'Open' },
    { id: 3, title: 'Job 7', status: 'Open' },
    // Add more job listings for "Open" status
  ];

  return (
    <div>
      <h2>Openings</h2>
      <ul>
        {openings.map((job) => (
          <li key={job.id}>
            {job.title} - Status: {job.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OpeningsComponent;
