import React, { useState } from 'react';
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Container,
  Typography,
} from '@mui/material';

import AllJobsComponent from './AllJobsComponent';
import OpeningsComponent from './OpeningsComponent';
import ClosedComponent from './ClosedComponent';
import SelectedComponent from './SelectedComponent';
import RejectedComponent from './RejectedComponent';

function JobManagePage() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <AppBar position="static" color="primary" sx={{ textAlign: 'center' }}>
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label="All Jobs" />
          <Tab label="Openings" />
          <Tab label="Closed" />
          <Tab label="Selected" />
          <Tab label="Rejected" />
        </Tabs>
      </AppBar>
      <Container>
        <Box mt={3}>
          <Typography variant="h4" gutterBottom>
            Job Management
          </Typography>
          {selectedTab === 0 && <AllJobsComponent />}
          {selectedTab === 1 && <OpeningsComponent />}
          {selectedTab === 2 && <ClosedComponent />}
          {selectedTab === 3 && <SelectedComponent />}
          {selectedTab === 4 && <RejectedComponent />}
        </Box>
      </Container>
    </div>
  );
}

export default JobManagePage;
