import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  TextField,
  Button,
} from '@mui/material';

const initialAboutMe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...";


function AboutMeCard() {
    const [aboutMe, setAboutMe] = useState(initialAboutMe);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can save the updated aboutMe content here if needed
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // You can revert any changes made while editing here if needed
  };

  return (
    <div>
<Card>
        <CardContent>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {!isEditing ? (
              <>
                <Typography gutterBottom variant="h6">
                  About Me
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {aboutMe}
                </Typography>
              </>
            ) : (
              <>
                <Typography gutterBottom variant="h6">
                  Edit About Me
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  value={aboutMe}
                  onChange={(e) => setAboutMe(e.target.value)}
                />
              </>
            )}
          </Box>
        </CardContent>
        <Divider />
        <CardContent>
          {!isEditing ? (
            <Button fullWidth variant="text" onClick={handleEditClick}>
              Edit
            </Button>
          ) : (
            <>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleSaveClick}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleCancelClick}
              >
                Cancel
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
export default AboutMeCard;
