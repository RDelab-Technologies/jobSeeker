import React, { useState, useEffect } from 'react';
import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material';

function JobStatsPage() {
  const [jobStats, setJobStats] = useState({
    totalJobs: 0,
    totalApplications: 0,
    totalRejected: 0,
    totalInProgress: 0,
  });

  // Simulated data fetching (you can replace this with actual data)
  useEffect(() => {
    // Simulate fetching job statistics from your API or database
    // Replace this with actual API calls
    const fetchData = async () => {
      // Simulated data (replace with your data)
      const response = {
        totalJobs: 100,
        totalApplications: 250,
        totalRejected: 30,
        totalInProgress: 70,
      };

      // Update state with fetched data
      setJobStats(response);
    };

    fetchData();
  }, []);

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
            <Grid container spacing={2}>
              {/* First Row */}
              <Grid item xs={12} sm={6} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="subtitle2" color="textSecondary">
                      Total Jobs
                    </Typography>
                    <Typography variant="h4">
                      {jobStats.totalJobs}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="subtitle2" color="textSecondary">
                      Total Applications
                    </Typography>
                    <Typography variant="h4">
                      {jobStats.totalApplications}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Second Row */}
              <Grid item xs={12} sm={6} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="subtitle2" color="textSecondary">
                      Total Rejected
                    </Typography>
                    <Typography variant="h4">
                      {jobStats.totalRejected}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="subtitle2" color="textSecondary">
                      In Progress
                    </Typography>
                    <Typography variant="h4">
                      {jobStats.totalInProgress}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default JobStatsPage;
