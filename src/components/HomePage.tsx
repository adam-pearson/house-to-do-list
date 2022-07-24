import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <Grid container sx={{ 
      overflow: 'hidden',
     }}>
    <Grid item xs={2} >
      <Box bgcolor='primary.light' sx={{
        height: "100vh", width: "100%"
        }}>Item 1</Box>
    </Grid>
    <Grid item xs={10}>
      <Box bgcolor='secondary.light' sx={{
        height: "100vh",
        }}>Item 2</Box>
    </Grid>
    </Grid>
  )
}

export default HomePage