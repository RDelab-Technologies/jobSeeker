import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton, // Import IconButton from Material-UI
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'; // Import the DeleteOutlineIcon

const initialSkills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];

function SkillsPage() {
  const [skills, setSkills] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can save the updated skills here if needed
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // You can revert any changes made while editing here if needed
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
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
                  Skills
                </Typography>
                <List>
                  {skills.map((skill, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={skill} />
                      <IconButton
                        color="secondary"
                        onClick={() => handleDeleteSkill(index)}
                      >
                        <DeleteOutlineIcon fontSize="small" /> {/* Use a smaller icon */}
                      </IconButton>
                    </ListItem>
                  ))}
                </List>
              </>
            ) : (
              <>
                <Typography gutterBottom variant="h6">
                  Edit Skills
                </Typography>
                <List>
                  {skills.map((skill, index) => (
                    <ListItem key={index}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        value={skill}
                        onChange={(e) => {
                          const updatedSkills = [...skills];
                          updatedSkills[index] = e.target.value;
                          setSkills(updatedSkills);
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
                <TextField
                  fullWidth
                  label="New Skill"
                  variant="outlined"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
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
              <Button
                variant="outlined"
                color="primary"
                onClick={handleAddSkill}
              >
                Add Skill
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default SkillsPage;
