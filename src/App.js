import React from 'react'
import MyAppBar from './components/MyAppBar'
import { CssBaseline, Container } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import HomePage from './components/HomePage'
import { Route, Routes } from 'react-router-dom'
import FlightPage from './components/FlightPage'

const getFlights = async (step) => {
  const response = await axios.get(
    `https://api.spacexdata.com/v3/launches?offset=${step}&limit=20`
  )
  console.log('FLIGHTS', response.data)
  console.log('STEP', step)
  return response.data
}

const App = () => {
  const [flights, setFlights] = useState([])
  const [filter, setFilter] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const [step, setStep] = useState(0)

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return
    }

    setIsFetching(true)
    setStep((previousState) => previousState + 20)
    console.log('Fetching more...', step, isFetching)
  }

  useEffect(() => {
    getFlights().then((f) => setFlights([...f]))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isFetching) {
      return
    }
    getFlights(step).then((f) =>
      setFlights((prevState) => [...prevState].concat([...f]))
    )
    setIsFetching(false)
  }, [isFetching])

  if (!flights.length) {
    return <div>Loading...</div>
  }

  const filteredFlights = !filter
    ? flights
    : flights.filter((f) => f.mission_name.toLowerCase().includes(filter))

  return (
    <Container disableGutters={true} maxWidth={false}>
      <CssBaseline />
      <MyAppBar />
      <Routes>
        <Route path='/' element={
          <HomePage
            filteredFlights={filteredFlights}
            filter={filter}
            setFilter={setFilter}
          />
        } />
        <Route path='/flight/:id' element={<FlightPage flights={filteredFlights} />} />
      </Routes>
    </Container>
  )
}

export default App
