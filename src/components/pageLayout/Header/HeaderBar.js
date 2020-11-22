import styled from 'styled-components'
import { HEADER_HEIGHT } from '../../../theme/constants'

export const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  height: ${HEADER_HEIGHT}px;

  ${({ theme: { pageMargins } }) => `
    padding: ${pageMargins?.sm}px ${pageMargins?.sm}px;
  `}
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${({ theme: { maxWidths } }) => `
    max-width: ${maxWidths?.content}px;
  `}
`
