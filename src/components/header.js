import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>GatsbyBlog</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Header