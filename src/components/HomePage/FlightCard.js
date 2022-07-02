import React from 'react'
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
} from '@mui/material'
import { Link } from 'react-router-dom'

const FlightCard = ({ flight }) => {
  return (
    <Grid item xs={6} lg={4}>
      <Card>
        <CardMedia
          component="img"
          height="150"
          image={flight.links.mission_patch_small}
          alt="flight photo"
        />
        <CardContent sx={{ mb: 3 }}>
          <Typography variant="body2">
            Mission name: {flight.mission_name}
          </Typography>
          <Typography variant="body2">
            Launch date: {flight.launch_date_utc.slice(0, 10)}
          </Typography>
          <Typography variant="body2">
            Flight details: {flight.details}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" sx={{ m: 'auto' }}>
            <Link
              to={`/flight/${flight.flight_number}${flight.mission_name}`}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              More Details
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default FlightCard
