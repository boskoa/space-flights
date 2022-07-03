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

const MyAppBar = ({ light, setLight }) => {
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
            <FormControlLabel onClick={() => setLight(!light)} control={<Switch />} label="Dark theme" />
          </FormGroup>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default MyAppBar