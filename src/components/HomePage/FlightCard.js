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
  const linkRaw = flight.flight_number.toString().concat(flight.mission_name)
  const link = linkRaw.replace(/[/ ]/g, '').toLowerCase()

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card elevation={5} sx={{ bgColor: 'primary' }}>
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
          <Link
            to={link}
            style={{ color: 'white', textDecoration: 'none', margin: 'auto' }}
          >
            <Button variant="contained" size="small">
              More Details
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default FlightCard
