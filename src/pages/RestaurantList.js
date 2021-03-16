import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import mockRestaurants from '../restaurant.json'
import Results from '../components/Results'
import Filter from '../components/Filter'
import Button from '../components/Button'

export default function RestaurantList() {
  const [restaurants, setRestaurants] = useState(mockRestaurants)
  const [categoryFilter, setCategoryFilter] = useState('Wähle eine Kategorie')
  const [priceFilter, setPriceFilter] = useState(1)
  const [distanceFilter, setDistanceFilter] = useState(1)
  const [veggieFilter, setVeggieFilter] = useState(1)
  const [triggerRerender, setTriggerRerender] = useState(true)

  useEffect(() => {
    categoryFilter === 'Wähle eine Kategorie'
      ? setRestaurants(mockRestaurants)
      : setRestaurants(
          mockRestaurants.filter(
            (restaurant) =>
              categoryFilter === restaurant?.kategorie &&
              priceFilter <= restaurant?.preis &&
              distanceFilter <= restaurant?.entfernung &&
              veggieFilter <= restaurant?.veggieTauglichkeit
          )
        )
  }, [triggerRerender])

  function reset() {
    setCategoryFilter('Wähle eine Kategorie')
    setPriceFilter(1)
    setDistanceFilter(1)
    setVeggieFilter(1)
    setTriggerRerender(!triggerRerender)
  }

  function randomize(unshuffledArray) {
    let array = [...unshuffledArray]
    let m = array.length
    let t
    let i
    while (m) {
      i = Math.floor(Math.random() * m--)
      t = array[m]
      array[m] = array[i]
      array[i] = t
    }

    setRestaurants(array)
  }

  return (
    <StyledMain>
      <StyledSection>
        <Filter
          title="Kategorien"
          filterOptions={[
            'Wähle eine Kategorie',
            'Alles',
            'Hausmannskost',
            'Pizza/Pasta',
            'Sonstiges',
            'Asiatisch',
            'Burger',
          ]}
          onChange={(event) => {
            setCategoryFilter(event.target.value)
            setTriggerRerender(!triggerRerender)
          }}
          isStarFilter={false}
          selectValue={categoryFilter}
        />
        <Filter
          title="Entfernung"
          filterOptions={['Egal', 'nicht so weit weg', 'ganz nah dran']}
          onChange={(event) => {
            setDistanceFilter(event.target.value)
            setTriggerRerender(!triggerRerender)
          }}
          selectValue={distanceFilter}
        />
        <Filter
          title="Preis"
          filterOptions={['Egal', 'nicht zu viel', 'Ende des Monats']}
          onChange={(event) => {
            setPriceFilter(event.target.value)
            setTriggerRerender(!triggerRerender)
          }}
          selectValue={priceFilter}
        />
        <Filter
          title="Veggietauglich"
          filterOptions={[
            'Egal ',
            'sollte schon schmecken',
            'muss ganz lecker sein',
          ]}
          onChange={(event) => {
            setVeggieFilter(event.target.value)
            setTriggerRerender(!triggerRerender)
          }}
          selectValue={veggieFilter}
        />
      </StyledSection>

      <Results restaurants={restaurants} />
      <StyledSection>
        <Button btnname="Reset" onClick={reset} />
        <Button btnname="Randomize" onClick={() => randomize(restaurants)} />
      </StyledSection>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  text-align: center;
  margin-top: 100px;
  background: var(--windowBg);
  padding: 20px;

  height: 35vh;
`

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
`
