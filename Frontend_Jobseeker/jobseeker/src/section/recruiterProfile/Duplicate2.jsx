import { useState } from "react"
import {
 
  Tabs,
  Tab,
  Container,

  Box,
  
  Card,
 
  CardContent,
  CardHeader,
  Divider,
 
} from '@mui/material';
import AllJobsComponent from './AllJobsComponent';
import OpeningsComponent from './OpeningsComponent';
import ClosedComponent from './ClosedComponent';
import SelectedComponent from './SelectedComponent';
import RejectedComponent from './RejectedComponent';




function Duplicate() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
 
    

  return (
    <div>

      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Manage Job's"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
          <Box sx={{
          alignItems: 'center',
          display: 'flex',
      
        }} >
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label="All Jobs" />
          <Tab label="Openings" />
          <Tab label="Closed" />
          <Tab label="Selected" />
          <Tab label="Rejected" />
        </Tabs>
      </Box>
      <Container>
        <Box mt={3}         sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}>
          {selectedTab === 0 && <AllJobsComponent />}
          {selectedTab === 1 && <OpeningsComponent />}
          {selectedTab === 2 && <ClosedComponent />}
          {selectedTab === 3 && <SelectedComponent />}
          {selectedTab === 4 && <RejectedComponent />}
        </Box>
      </Container>
          </Box>
        </CardContent>
        <Divider />       
      </Card>

    </div>
  )
}

export default Duplicate
