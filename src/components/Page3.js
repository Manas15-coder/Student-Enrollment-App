import { Typography, Grid, Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Page3 = () => {
    const student = useSelector((state) => state.student.student)
    return (
        <>
            <Grid container justifyContent={'center'} marginTop={'10%'} spacing={2}>
                <Grid item>
                    <img src='https://img.freepik.com/free-vector/college-admission-concept-illustration_114360-13739.jpg' alt='student' className='img-fluid' />
                </Grid>
                <Grid item>
                    <Typography variant='h5' sx={{ color: '#fff', fontWeight: 'bold' }}>Your name {student.name} aged {student.age} has been added to student system. You may now exit.</Typography>
                    <Button variant='contained' LinkComponent={Link} to='/' sx={{ backgroundColor: "#07256", color: 'white' }}>Exit</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default Page3
