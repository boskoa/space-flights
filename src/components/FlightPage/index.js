import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import RocketDetails from './RocketDetails'

const FlightPage = ({ flights }) => {
  const { id } = useParams()
  const flight = flights.find(
    (f) => {
      const linkRaw = f.flight_number.toString().concat(f.mission_name)
      const link = linkRaw.replace(/[/ ]/g, '').toLowerCase()
      return link === id
    }
  )

  return flight && (
    <Container>
      <Stack sx={{ mt: 5 }}>
        <Stack direction="row">
          <Box sx={{ mr: 2, width: '70rem' }}>
            <img alt="mission patch" src={flight.links.mission_patch} width="100%" />
          </Box>
          <Typography variant="body2">{flight.details}</Typography>
        </Stack>
        <RocketDetails flight={flight} />
        <Typography
          variant="body2"
          sx={{ fontWeight: 'bold' }}
          color={flight.launch_success ? '#33cc33': '#dc2222'}
        >
          Launch success: {flight.launch_success && flight.launch_success.toString()}
        </Typography>
      </Stack>
    </Container>
  )
}

export default FlightPage