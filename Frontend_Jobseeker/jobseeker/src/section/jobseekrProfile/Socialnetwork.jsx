import {
    Box,
    Card,
    CardContent,
    Divider,
  } from '@mui/material';
  import * as React from "react";
import Stack from "@mui/material/Stack";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';



function Socialnetwork() {
  return (
    <div>
    <Card>
  <CardContent>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Stack direction="row" alignItems="center" spacing={4}>   
        <GitHubIcon fontSize="large"  />
        <YouTubeIcon fontSize="large" sx={{ color: "#FF0000" }} />
        <TwitterIcon fontSize="large" sx={{ color: "#1DA1F2" }} />
        <LinkedInIcon fontSize="large" color="primary" />
      </Stack>
    </Box>
  </CardContent>
  <Divider />
</Card>
  </div>
  )
}

export default Socialnetwork
