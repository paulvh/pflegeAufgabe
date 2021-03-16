import React from 'react'
import styled from 'styled-components'

export default function Card({ title }) {
  return (
    <StyledHeader>
      <StyledH1>{title}</StyledH1>
    </StyledHeader>
  )
}

const StyledH1 = styled.h1`
  font: no-serif;
  opacity: 1;
`

const StyledHeader = styled.header`
  height: 70px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: darkred;
`
