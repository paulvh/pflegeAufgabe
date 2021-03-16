import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faStar } from '@fortawesome/free-solid-svg-icons'

export default function Results({ restaurants }) {
  return (
    <StyledSection>
      {restaurants.map((restaurant, index) => (
        <p>
          <b>
            {index + 1}. {restaurant?.name}
          </b>{' '}
          | Preis:{' '}
          {[...Array(Number(restaurant.preis))].map((e, index) => (
            <StyledIcon icon={faStar} key={index} />
          ))}{' '}
          | Entfernung:{' '}
          {[...Array(Number(restaurant.entfernung))].map((e, index) => (
            <StyledIcon icon={faStar} key={index} />
          ))}{' '}
          | Veggietauglich:{' '}
          {[...Array(Number(restaurant.veggieTauglichkeit))].map((e, index) => (
            <StyledIcon icon={faStar} key={index} />
          ))}
        </p>
      ))}
    </StyledSection>
  )
}

const StyledSection = styled.section`
  margin: 50px 0px;
`
const StyledIcon = styled(FontAwesomeIcon)`
  color: gold;
`
