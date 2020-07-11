import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            date
                        }
                        timeToRead
                    }
                }
            }
        }
    `)
    return (
        <div>
            <Layout>
                <h1>Blog</h1>
                <ol>
                    {
                        data.allMarkdownRemark.edges.map((edge) => {
                            return (
                                <li>
                                    <h2>{edge.node.frontmatter.title} </h2>
                                    <p>{edge.node.frontmatter.date}</p>
                                    <p>{edge.node.timeToRead} min read</p>
                                </li>
                            )
                        })
                    }
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage