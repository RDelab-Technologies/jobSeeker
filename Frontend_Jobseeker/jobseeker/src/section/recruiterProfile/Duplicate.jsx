import { useState } from "react"
import {
  
  Select,
MenuItem,
FormControl,
InputLabel,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';





function Duplicate() {
    
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
  return (
    <div>
      <form
      autoComplete="off"
      noValidate
    //   onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Job post"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
          <TextField
            fullWidth
            label="Job Title"
            name="jobTitle"
            value={jobDetails.jobTitle}
            onChange={handleChange}
            required
          />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
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
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
               <TextField
            fullWidth
            label="Location"
            name="location"
            value={jobDetails.location}
            onChange={handleChange}
            required
          />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
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
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
              </Grid>
              <Grid
                xs={12}
                md={6}
              >               
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                              </Grid>
              <Grid
                xs={12}
                md={6}
              >
             </Grid>
             <Grid
                xs={12}
                md={6}
              >
                             <input accept="image/" type="file" id="select-image" />
                <label htmlFor="select-image">
  </label>

             </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained" >
            Post
          </Button>
        </CardActions>
      </Card>
    </form> 
    </div>
  )
}

export default Duplicate
