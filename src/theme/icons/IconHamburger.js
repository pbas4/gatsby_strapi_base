import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconStyled = styled.svg`
  ${({ theme, fillColor }) =>
    fillColor &&
    `fill: ${theme.colors[fillColor] ? theme.colors[fillColor] : fillColor};`}
  ${({ height }) => height && `height: ${height}px;`}
  ${({ width }) => width && `width: ${width}px;`}
`

function IconHamburger({ width, height, fill }) {
  return (
    <IconStyled
      viewBox="0 0 32 32"
      width={width}
      height={height}
      fillColor={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 10h24a2 2 0 000-4H4a2 2 0 000 4zm24 4H4a2 2 0 000 4h24a2 2 0 000-4zm0 8H4a2 2 0 000 4h24a2 2 0 000-4z" />
    </IconStyled>
  )
}

IconHamburger.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

IconHamburger.defaultProps = {
  width: 32,
  height: 32,
  fill: 'black',
}

export default IconHamburger
