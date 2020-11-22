module.exports = {
  siteMetadata: {
    title: 'STUDIO CASTAN',
    description:
      'Creative & Graphic Design studio based in the Amsterdam.',
    author: 'Pol Bas',
    url: 'https://www.martacastan.com',
    image: 'src/images/logo.png',
    keywords: [
      'martacastan',
      '3dart',
      'design',
      'graphic design',
      'barcelona',
      'amsterdam',
      'netherlands',
      'print',
      'editorial',
      '3d',
      'freelance',
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Heebo',
            variants: ['100', '300', '500', '700', '900'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Default to 100
        contentTypes: ['project', 'category'],
        // If using single types place them in this array.
        singleTypes: ['home'],
        // eslint-disable-next-line max-len
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        loginData: {
          identifier: '',
          password: '',
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-lodash',

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
