import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <h1>About Us</h1>
                <p>Our description is here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis voluptas porro doloribus, laudantium et rem.</p>
                <p>Need a developer? <Link to="/contact">Contact Me.</Link> </p>
            </Layout>
        </div>
    )
}

export default AboutPage;