/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigMode: 'src/utils/typography',
        icon: 'src/images/favicon.png'
      }
    }
  ]
}
