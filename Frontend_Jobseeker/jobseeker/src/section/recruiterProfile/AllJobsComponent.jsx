import React from 'react';

function AllJobsComponent() {
  // Replace this with your actual job data or API fetch logic
  const allJobs = [
    { id: 1, title: 'Job 1', status: 'Open' },
    { id: 2, title: 'Job 2', status: 'Closed' },
    { id: 3, title: 'Job 3', status: 'Selected' },
    { id: 4, title: 'Job 4', status: 'Rejected' },
    // Add more job listings
  ];

  return (
    <div>
      <h2>All Jobs</h2>
      <ul>
        {allJobs.map((job) => (
          <li key={job.id}>
            {job.title} - Status: {job.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllJobsComponent;
