import React from 'react';

function RejectedComponent() {
  // Replace this with your actual job data or API fetch logic for rejected jobs
  const rejectedJobs = [
    { id: 1, title: 'Job 12', status: 'Rejected' },
    { id: 2, title: 'Job 13', status: 'Rejected' },
    // Add more job listings for "Rejected" status
  ];

  return (
    <div>
      <h2>Rejected</h2>
      <ul>
        {rejectedJobs.map((job) => (
          <li key={job.id}>
            {job.title} - Status: {job.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RejectedComponent;
