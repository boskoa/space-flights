import { Box, Typography } from '@mui/material'
import React from 'react'

const RocketDetails = ({ flight }) => {
  return (
    <Box className="rocket-details">
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        Rocket name: {flight.rocket.rocket_name}
      </Typography>
      <Typography variant="body2">
        Rocket type: {flight.rocket.rocket_type}
      </Typography>
      <Typography variant="body2">
        Engine (first stage): {flight.rocket.first_stage.cores[0].core_serial}
      </Typography>
      <Typography variant="body2">
        Payloads:
      </Typography>
      {flight.rocket.second_stage.payloads.map(
        (p) => <Typography variant="body2"
          key={p.payload_id}
          sx={{ ml: '2rem', mt: 0, mb: 0 }}
        >
          {p.payload_type} {p.payload_id} for {p.customers[0]}, {p.nationality}
        </Typography>
      )}
    </Box>
  )
}

export default RocketDetails