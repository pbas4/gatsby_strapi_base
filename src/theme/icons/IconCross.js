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

function IconCross({ width, height, fill }) {
  return (
    <IconStyled
      viewBox="0 0 32 32"
      width={width}
      height={height}
      fillColor={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28 14H18V4a2 2 0 00-4 0v10H4a2 2 0 000 4h10v10a2 2 0 004 0V18h10a2 2 0 000-4z" />
    </IconStyled>
  )
}

IconCross.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

IconCross.defaultProps = {
  width: 32,
  height: 32,
  fill: 'black',
}

export default IconCross
