import { Box,Divider, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import UserProfile from './UserProfile';
import UserCart from './UserCart';
import { SettingsPassword } from './SettingsPassword';
import Socialnetwork from './Socialnetwork';
import { Education } from './Education';
import AboutMeCard from './AboutMeCard';
import SkillsPage from './SkillsPage';
import AppliedJobsPage from './AppliedJobsPage';


function UserProfileDetails() {
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
              User Account
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
                <UserCart/>
                <Divider />
                <Socialnetwork/>
                <Divider />
                <AboutMeCard/>
                <Divider />
                <SkillsPage/>
                <Divider />
                <AppliedJobsPage/>
              </Grid>
              
              <Grid
                xs={12}
                md={6}
                lg={8}
              >
                {/* <AccountProfileDetails /> */}
                <UserProfile/>
                <Divider/>
                <Education/>
                <Divider/>
                <SettingsPassword/>
                
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
    </div>
  )
}

export default UserProfileDetails
