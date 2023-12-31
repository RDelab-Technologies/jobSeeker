import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
  } from '@mui/material';
  const user = {
    avatar: '/assets/avatars/avatar-siegbert-gottfried.png',
    city: 'Nashik,',
    country: 'India',
    position: 'HR Head',
    name: 'Sachin Shinde',
    company_name: 'Rdelab'
  };  

function Rcard() {
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
        <Avatar
          src={user.avatar}
          sx={{
            height: 80,
            mb: 2,
            width: 80
          }}
        />
        <Typography
          gutterBottom
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {user.city} {user.country}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {user.position} 
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {user.company_name}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button
        fullWidth
        variant="text"
        
      >
        Upload picture
      </Button>
    </CardActions>
  </Card>
    </div>
  )
}

export default Rcard;
