import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const initialJobs = [
  { id: 1, title: 'Software Engineer', status: 'Applied' },
  { id: 2, title: 'Product Manager', status: 'In Review' },
  { id: 3, title: 'Data Analyst', status: 'Rejected' },
];

function AppliedJobsPage() {
  const [jobs, setJobs] = useState(initialJobs);

  const handleDeleteJob = (id) => {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography gutterBottom variant="h6">
              Applied Jobs
            </Typography>
            <List>
              {jobs.map((job) => (
                <ListItem key={job.id}>
                  <ListItemText primary={job.title} secondary={`Status: ${job.status}`} />
                  <ListItemSecondaryAction>
                    {job.status === 'Applied' ? (
                      <IconButton color="secondary" onClick={() => handleDeleteJob(job.id)}>
                        <DeleteOutlineIcon fontSize="small" />
                      </IconButton>
                    ) : job.status === 'In Review' ? (
                      <CheckCircleOutlineIcon color="primary" fontSize="small" />
                    ) : (
                      <ErrorOutlineIcon color="error" fontSize="small" />
                    )}
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Box>
        </CardContent>
        <Divider />
      </Card>
    </div>
  );
}

export default AppliedJobsPage;
