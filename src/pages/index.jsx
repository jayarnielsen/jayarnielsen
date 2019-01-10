import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AboutMe from '../components/AboutMe'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`web developer`, `Jay Nielsen`]} />
    <AboutMe />
  </Layout>
)

export default IndexPage
