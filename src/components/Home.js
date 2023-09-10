import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Grid container justifyContent={'center'} textAlign={'center'}>
                <Grid item>
                    <img src='https://cdn3d.iconscout.com/3d/premium/thumb/student-studying-on-laptop-while-sitting-on-bean-bag-5711047-4779535.png' className='img-fluid' height='100px' />
                    <Typography variant="h4" sx={{ color: '#fff', fontWeight: 'bold' }}>Enter into Student Info System</Typography>
                    <Link to='/register'><img src='https://png.pngtree.com/png-vector/20220921/ourmid/pngtree-transparent-background-enroll-now-banner-png-image_6209019.png' className='img-fluid btn' /></Link>
                </Grid>
            </Grid>
        </>
    )
}

export default Home
