import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
  Stack,
} from '@mui/material'
import { Link } from 'react-router-dom'

const MyAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ bgcolor: 'text.secondary' }}>
        <Stack
          sx={{ width: '100%' }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="body1">
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              SpaceFlights
            </Link>
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Switch />} label="Dark theme" />
          </FormGroup>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default MyAppBar