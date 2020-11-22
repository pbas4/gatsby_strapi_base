import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import MainWrapper from '../MainWrapper/MainWrapper';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log('data', data);

  return (
    <>
      {children}
      {/* <Header siteTitle={data.site.siteMetadata.title} />
      <MainWrapper>{children}</MainWrapper>
      {hasFooter && <Footer>Footer</Footer>} */}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasFooter: PropTypes.bool,
};

Layout.defaultProps = {
  hasFooter: true,
};

export default Layout;
