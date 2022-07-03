import React from 'react'
import MyAppBar from './components/MyAppBar'
import { CssBaseline, Container } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import axios from 'axios'
import { useEffect, useState } from 'react'
import HomePage from './components/HomePage'
import { Route, Routes } from 'react-router-dom'
import FlightPage from './components/FlightPage'

const getFlights = async (step) => {
  const response = await axios.get(
    `https://api.spacexdata.com/v3/launches?offset=${step}&limit=20`
  )

  return response.data
}

const themeLight = createTheme({})

const themeDark = createTheme({
  palette: {
    primary: {
      main: '#003839'
    },
    background: {
      default: '#008385',
      paper: '#005152'
    },
    text: {
      primary: '#ffffff'
    }
  }
})

const App = () => {
  const [flights, setFlights] = useState([])
  const [filter, setFilter] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const [step, setStep] = useState(0)
  const [light, setLight] = useState(true)

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return
    }

    setIsFetching(true)
    setStep((previousState) => previousState + 20)
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
      <ThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline />
        <MyAppBar light={light} setLight={setLight} />
        <Routes>
          <Route path='/:id' element={<FlightPage flights={filteredFlights} />} />
          <Route path='/' element={
            <HomePage
              filteredFlights={filteredFlights}
              filter={filter}
              setFilter={setFilter}
            />
          } />
        </Routes>
      </ThemeProvider>
    </Container>
  )
}

export default App
