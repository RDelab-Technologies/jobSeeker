import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { 
  CardHeader,
} from '@mui/material';



function createData(
  id,
  degree,
  school,
  year,
) {
  return { id, degree, school, year };
}
const initialEducation = [
  createData(1, 'Bachelor of Science', 'Example University', '2016 - 2020'),
  createData(2, 'Master of Science', 'Another University', '2021 - 2023'),
];




export const Education = () => {
  const [education, setEducation] = useState(initialEducation);
  const [editRow, setEditRow] = useState(null);

  const handleEditClick = (id) => {
    setEditRow(id);
  };

  const handleSaveClick = (id) => {
    const updatedEducation = education.map((edu) => {
      if (edu.id === id) {
        return {
          ...edu,
          degree: document.getElementById(`degree-${edu.id}`).value,
          school: document.getElementById(`school-${edu.id}`).value,
          year: document.getElementById(`year-${edu.id}`).value,
        };
      }
      return edu;
    });
    setEducation(updatedEducation);
    setEditRow(null);
  };

  const handleCancelClick = () => {
    setEditRow(null);
  };

  const handleAddClick = () => {
    const newId = education.length + 1;
    const newEducation = [...education, createData(newId, '', '', '')];
    setEducation(newEducation);
    setEditRow(newId);
  };

  return (
<TableContainer component={Paper}>
<CardHeader
          subheader="Update Education"
          title="Education"
        />
      <Table sx={{ manWidth: 650 }} size="small" aria-label="a dense table"/>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="education table">
        <TableHead>
          <TableRow>
            <TableCell>Degree</TableCell>
            <TableCell>School</TableCell>
            <TableCell>Year</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {education.map((edu) => (
            <TableRow key={edu.id}>
              <TableCell>
                {editRow === edu.id ? (
                  <TextField
                    id={`degree-${edu.id}`}
                    defaultValue={edu.degree}
                    fullWidth
                  />
                ) : (
                  edu.degree
                )}
              </TableCell>
              <TableCell>
                {editRow === edu.id ? (
                  <TextField
                    id={`school-${edu.id}`}
                    defaultValue={edu.school}
                    fullWidth
                  />
                ) : (
                  edu.school
                )}
              </TableCell>
              <TableCell>
                {editRow === edu.id ? (
                  <TextField
                    id={`year-${edu.id}`}
                    defaultValue={edu.year}
                    fullWidth
                  />
                ) : (
                  edu.year
                )}
              </TableCell>
              <TableCell>
                {editRow === edu.id ? (
                  <>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleSaveClick(edu.id)}
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
                ) : (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEditClick(edu.id)}
                  >
                    Edit
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={4}>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleAddClick}
              >
                Add Education
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
