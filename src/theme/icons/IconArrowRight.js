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

function IconArrowRight({ width, height, fill }) {
  return (
    <IconStyled
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fillColor={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        data-name="&lt;Path&gt;"
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7.66 3.41l8.68 8.69-8.48 8.49"
      />
      {/* <path d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z" /> */}
    </IconStyled>
  )
}

IconArrowRight.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
}

IconArrowRight.defaultProps = {
  width: 32,
  height: 32,
  fill: 'black',
}

export default IconArrowRight
