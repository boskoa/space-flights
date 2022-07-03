import React from 'react'
import FlightCard from './FlightCard'
import { Grid, Container, Box, TextField } from '@mui/material'

const HomePage = ({ filteredFlights, filter, setFilter }) => {
  return (
    <Container>
      <Box sx={{ paddingLeft: 5, paddingTop: 2 }}>
        <TextField
          id="outlined-basic"
          label="Search flights"
          variant="outlined"
          size="small"
          value={filter}
          onChange={(e) => setFilter(e.target.value.toLowerCase())}
        />
      </Box>
      <Grid container spacing={12} sx={{ padding: 5 }}>
        {filteredFlights.map((f) => (
          <FlightCard key={Math.floor(Math.random() * 10000000)} flight={f} />
        ))}
      </Grid>
    </Container>
  )
}

export default HomePage