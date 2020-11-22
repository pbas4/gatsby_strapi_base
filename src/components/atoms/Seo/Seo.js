/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

// function SEO({ description, lang, meta, title }) {
function SEO({ title, description, image }) {
  const { site } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate: title
            defaultDescription: description
            siteUrl: url
            defaultImage: image
            keywords
          }
        }
      }
    `,
  );

  const { pathname } = useLocation();

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    keywords,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    metaKeywords: keywords || [
      'martacastan',
      'design',
      'graphic design',
      'barcelona',
      'amsterdam',
      'netherlands',
    ],
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={seo.title}
      image={seo.image}
      url={seo.url}
      meta={[
        {
          name: 'description',
          content: seo.description,
        },
        {
          property: 'og:title',
          content: seo.title,
        },
        {
          property: 'og:description',
          content: seo.description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ].concat(
        seo.metaKeywords && seo.metaKeywords.length > 0
          ? {
            name: 'keywords',
            content: seo.metaKeywords.join(', '),
          }
          : [],
      )}
    />
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
};

export default SEO;
