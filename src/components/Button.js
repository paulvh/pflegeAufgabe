import React from 'react'
import styled from 'styled-components'

export default function Button({ onClick, btnname }) {
  return (
    <StyledButton onClick={onClick}>
      <h3>{btnname}</h3>
    </StyledButton>
  )
}

const StyledButton = styled.div`
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--btnBg);

  :active {
    background: darkred;
  }
`
