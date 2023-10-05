import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

function PostJob() {
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    jobDescription: '',
    jobType: '',
    location: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setJobDetails((prevJobDetails) => ({
      ...prevJobDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle job posting logic here (e.g., send data to server)
    console.log(jobDetails);
    // Reset the form
    setJobDetails({
      jobTitle: '',
      jobDescription: '',
      jobType: '',
      location: '',
    });
  };

  return (
    
    <Container>
      <Box mt={3}>
        <Typography variant="h4" gutterBottom>
          Post a Job
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Job Title"
            name="jobTitle"
            value={jobDetails.jobTitle}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            label="Job Description"
            name="jobDescription"
            multiline
            rows={4}
            value={jobDetails.jobDescription}
            onChange={handleChange}
            required
          />
          <FormControl fullWidth>
            <InputLabel>Job Type</InputLabel>
            <Select
              name="jobType"
              value={jobDetails.jobType}
              onChange={handleChange}
              required
            >
              <MenuItem value="Full-Time">Full-Time</MenuItem>
              <MenuItem value="Part-Time">Part-Time</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Location"
            name="location"
            value={jobDetails.location}
            onChange={handleChange}
            required
          />
          <Box mt={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Post Job
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default PostJob;
