import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

const FlightPage = ({ flights }) => {
  const { id } = useParams()
  const flight = flights.find(
    (f) => (f.flight_number.toString().concat(f.mission_name)) === id
  )

  return (
    <Container>
      <Stack sx={{ mt: 5 }}>
        <Stack direction="row">
          <img alt="mission patch" style={{ marginRight: 10 }} src={flight.links.mission_patch} width="60%" />
          <Typography variant="body2">{flight.details}</Typography>
        </Stack>
        <Box>
          <Typography variant="body2">Rocket name: {flight.rocket.rocket_name}</Typography>
          <Typography variant="body2">
            Engine (first stage) - {flight.rocket.first_stage.cores[0].core_serial},
            payload - {flight.rocket.first_stage.cores[0].core_serial}
          </Typography>
        </Box>
        <Box>Uspešnost misije</Box>
      </Stack>
    </Container>
  )
}

export default FlightPage