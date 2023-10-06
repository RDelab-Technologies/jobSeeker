import { Box, Divider,Container, Stack, Typography, Unstable_Grid2 as Grid, } from '@mui/material';
import Rcard from './Rcard';
import Socialnetwork from './Socialnetwork'
import Form from './Form';
import Duplicate from './Duplicate';
import Duplicate2 from './Duplicate2'
import JobStatsPage from './JobStatsPage';





function Cover() {
  return (
    <div>
          <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <div>
            <Typography variant="h4">
              Recruiter Account
            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
                lg={4}
              >
                {/* <AccountProfile /> */}
                <Rcard/>
                <Divider />
                <Socialnetwork/>
                <Divider />
                <JobStatsPage/>
            
              </Grid>
              
              <Grid
                xs={12}
                md={6}
                lg={8}
              >
                {/* <AccountProfileDetails /> */}
                <Form/>
                <Divider/>
                <Duplicate/>
                <Divider/>
                <Duplicate2/>
                <Divider/>
               
                
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
    </div>
  )
}

export default Cover
