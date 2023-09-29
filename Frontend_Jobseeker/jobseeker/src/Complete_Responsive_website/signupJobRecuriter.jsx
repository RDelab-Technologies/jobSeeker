import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';




const defaultTheme = createTheme();


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  
  const signupJobRecuriter = () => {
  return (
    <>

<div className='backgroundimg1'>

       <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up Only for Job Recuriter
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <select class="form-select" aria-label="Default select example" style={{opacity:1.2}}>
                     <option selected>Select Your Sector</option>
                      
                     <option value="1">Website Developer</option>
                       <option value="2">Application Developer</option>
                        <option value="3">Software Developer</option>
                        <option value="1">Data Anlytics</option>
                       <option value="2">Cloud Computing</option>
                        <option value="3">Php Developer</option>
                        <option value="1">Python Developer</option>
                       <option value="2">Java Developer</option>
                        <option value="3">Software Tester</option>
              </select>
              <br />
              <div>
  <label for="formFileLg" class="form-label">Add Your Logo</label>
  <input class="form-control form-control-lg" id="formFileLg" type="file" />
</div>
 <br />
          <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Company Tittle"
                  label="Company Tittle"
                  name="Company Tittle"
                  autoComplete="Company Tittle"
                />
              </Grid>
              <br></br>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Sector"
                  label="Sector"
                  name="Sector"
                  autoComplete="Sector"
                />
              </Grid>
              <br></br>
​
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Location"
                  label="Location"
                  type="Location"
                  id="Location"
                  autoComplete="Location"
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Password"
                  label="Password"
                  name="Password"
                  autoComplete="Password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Confirm Password"
                  label="Confirm Password"
                  name="Confirm Password"
                  autoComplete="Confirm Password"
                />
              </Grid>
              
              <br></br>
              <br></br>
              
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <NavLink to="/login" variant="body2">
                  Already have an account? Sign in
                </NavLink>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
    </>
  );
}
export default signupJobRecuriter;