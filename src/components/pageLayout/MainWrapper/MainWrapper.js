// import React from 'react'
// import styled from 'styled-components'
// import PropTypes from 'prop-types'
// import { HEADER_HEIGHT, FOOTER_HEIGHT } from '../../../theme/constants'

// const MainContainer = styled.main`
//   width: 100%;

//   ${({ theme: { pageMargins, maxWidths } }) => `
//     padding-top: ${pageMargins?.xs}px;
//     max-width: ${maxWidths?.content}px;
//     margin: ${HEADER_HEIGHT}px auto calc(${FOOTER_HEIGHT}px + ${pageMargins?.sm}px) auto;
//     `}

//   ${({ theme: { pageMargins, media } }) => media.md`
//     padding-top: ${pageMargins?.md}px;
//     margin: ${HEADER_HEIGHT}px auto calc(${FOOTER_HEIGHT}px + ${pageMargins?.md}px) auto;
//   `}
// `

// const MainWrapper = ({ children }) => <MainContainer>{children}</MainContainer>

// MainWrapper.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default MainWrapper
