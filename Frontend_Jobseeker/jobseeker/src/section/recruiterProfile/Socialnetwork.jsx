import {
  Box,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import * as React from "react";
import Stack from "@mui/material/Stack";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';

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
             
              <TwitterIcon fontSize="large" sx={{ color: "#1DA1F2" }} />
              <LinkedInIcon fontSize="large" color="primary" />
              {/* Gmail Icon */}
              <EmailIcon fontSize="large" sx={{ color: "#D14836" }} />
            </Stack>
          </Box>
        </CardContent>
        <Divider />
      </Card>
    </div>
  )
}

export default Socialnetwork;
