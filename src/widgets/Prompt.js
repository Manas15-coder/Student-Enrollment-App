import { Button, Grid } from '@mui/material'

import React from 'react'

function Prompt(props) {
  return (
    <Grid container justifyContent={'center'}>
      <Button
        sx={{
          display: 'flex',
          width: '50%',
          variant: 'outlined',
          color: 'white',
          backgroundColor:'#072565',
          borderRadius:'20px'
        }}
        onClick={props.actionProvider.nameHandler}
      >
        Got it!
      </Button>
    </Grid>



  )
}

export default Prompt;
