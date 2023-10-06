import { useState } from "react"
import {
  Avatar,
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

const user = {
  avatar: '/assets/avatars/rdelab.jpeg',
};





function Duplicate() {
    
  const [jobDetails, setJobDetails] = useState({
    companyName: "RDelab Tech PVT LTD",
    aboutCompany:"Our vision is put into action through programs and a focus to build a place where people can come to find and achieve more. We believe this is the best long-term way for our business to grow.",
    jobTitle: 'Software Engineer',
    jobDescription: '',
    jobType: '',
    location: 'Pune',
    company: "RDelab", 
    jobRequirements: "", 
    experience: "3+", 
    education: "BE Graduate", 
    offeredSalary: "5LPA", 
    startDate: "", 
    endDate: "", 
    numberOfApplications: "15",
    assessmentLink: "https://www.linkedin.com/company/rdelab/?originalSubdomain=in",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "jobDescription") {
      const wordCount = value.trim().split(/\s+/).length;
      if (wordCount > 500) {
        return; 
      }
    }
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
      // onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Job post"
        />
        <CardContent sx={{ pt: 0 }}>
        <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 80,
            mb: 2,
            width: 80,
          }}
        />
        <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Company Name" 
                    name="companyName"
                    value={jobDetails.companyName}
                    onChange={handleChange}
                    required
                  />
                  </Grid>
                  <Grid
                xs={12}
                md={9}
              >
                <TextField
                    fullWidth
                    label="AboutCompany" // New field: Job Requirements
                    name="aboutCompany"
                    multiline
                    inputProps={{min: 0, style: { textAlign: 'center' }}} 
                    rows={4}
                    value={jobDetails.aboutCompany}
                    onChange={handleChange}
                    required
                    sx={{
                      textAlign: "center", // Center text horizontally
                    }}
                  />
              </Grid>
        </Box>
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
                    label="Experience" 
                    name="experience"
                    value={jobDetails.experience}
                    onChange={handleChange}
                    required
                  />   </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                    fullWidth
                    label="Education" 
                    name="education"
                    value={jobDetails.education}
                    onChange={handleChange}
                    required
                  />
             </Grid>
             <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Offered Salary" 
                    name="offeredSalary"
                    value={jobDetails.offeredSalary}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Start Date" 
                    name="startDate"
                    type="date"
                    value={jobDetails.startDate}
                    onChange={handleChange}
                    required
                  />
                  </Grid>
                  <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="End Date" 
                    name="endDate"
                    type="date"
                    value={jobDetails.endDate}
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
                <TextField
                    fullWidth
                    label="Job Requirements" // New field: Job Requirements
                    name="jobRequirements"
                    multiline
                    rows={4}
                    value={jobDetails.jobRequirements}
                    onChange={handleChange}
                    required
                  />
              </Grid>
              <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Number of Applications Allowed" // New field: Number of Applications Allowed
                    name="numberOfApplications"
                    type="number" // Use type="number" for numeric input
                    value={jobDetails.numberOfApplications}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Assessment Link" // New field: Assessment Link
                    name="assessmentLink"
                    value={jobDetails.assessmentLink}
                    onChange={handleChange}
                    required
                  />
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
