import React from 'react'
import Header from './components/Header'
import RestaurantList from './pages/RestaurantList'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header title="Wo / Was essen wir denn heute?" />
      <AppGrid>
        <RestaurantList />
      </AppGrid>
    </>
  )
}

const AppGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
`
