import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOption, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';


const Exercises = ({ bodyPart, exercise, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOption);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOption);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart,setExercises]);



  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercise.slice(indexOfFirstExercise, indexOfLastExercise);

  if (!currentExercises.length) return <Loader />;


  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };


  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>

      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercis, idx) => (
          <ExerciseCard key={idx} exercise={exercis} />
        ))}
      </Stack>

      <Stack mt="100px" alignItems="center">
        {exercise.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercise.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
      
    </Box>
  )
}

export default Exercises