// import { Link, useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import { withTheme } from 'styled-components'
// import PropTypes from 'prop-types'
// import React from 'react'
// import useAdaptive from '../../../utils/useAdaptive'
// import DesktopNavigation from '../../atoms/DesktopNavigation'
// import MobileNavigation from '../../atoms/MobileNavigation'
// import { HeaderBar, HeaderContainer } from './HeaderBar'

// const Header = ({ siteTitle, theme }) => {
//   const device = useAdaptive({
//     md: theme?.screenWidths?.md,
//   })
//   const isDesktop = device === 'md'

//   const {
//     allWordpressWpMedia,
//     wordpressMenusMenusItems,
//   } = useStaticQuery(graphql`
//     query LogoImageQuery {
//       allWordpressWpMedia(filter: { title: { eq: "logo" } }) {
//         nodes {
//           localFile {
//             childImageSharp {
//               fluid(quality: 100, maxWidth: 300) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//       }
//       wordpressMenusMenusItems(wordpress_id: { eq: 2 }) {
//         items {
//           title
//           url
//           slug
//         }
//       }
//     }
//   `)

//   // Logo image
//   const {
//     localFile: { childImageSharp },
//   } = allWordpressWpMedia.nodes[0]

//   // Menu
//   const { items: menuItems } = wordpressMenusMenusItems

//   return (
//     <HeaderBar>
//       <HeaderContainer>
//         <Link to="/">
//           <Img
//             fluid={childImageSharp.fluid}
//             alt={siteTitle}
//             style={{ width: '80px' }}
//           />
//         </Link>

//         {!isDesktop ? (
//           <MobileNavigation menuItems={menuItems} logoImage={childImageSharp} />
//         ) : (
//           <DesktopNavigation menuItems={menuItems} />
//         )}
//       </HeaderContainer>
//     </HeaderBar>
//   )
// }

// Header.propTypes = {
//   siteTitle: PropTypes.string,
//   theme: PropTypes.object.isRequired,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default withTheme(Header)
