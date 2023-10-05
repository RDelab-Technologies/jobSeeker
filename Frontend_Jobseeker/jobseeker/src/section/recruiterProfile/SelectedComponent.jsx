import React from 'react';

function SelectedComponent() {
  // Replace this with your actual job data or API fetch logic for selected jobs
  const selectedJobs = [
    { id: 1, title: 'Job 10', status: 'Selected' },
    { id: 2, title: 'Job 11', status: 'Selected' },
    // Add more job listings for "Selected" status
  ];

  return (
    <div>
      <h2>Selected</h2>
      <ul>
        {selectedJobs.map((job) => (
          <li key={job.id}>
            {job.title} - Status: {job.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedComponent;
