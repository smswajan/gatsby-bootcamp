import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quasi non consequuntur assumenda beatae, sequi laboriosam maiores accusantium amet libero minus et. Distinctio soluta ab adipisci optio natus quaerat
      deleniti?</p>
        {/* Using anchor tag is not efficient for gatsby site link. Anchor tag can be used for external links */}
        {/* <p>Need a developer? <a href="/contact">Contact me</a></p> */}
        <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
      </Layout>
    </div>
  )
}

export default IndexPage