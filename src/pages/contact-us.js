import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"

const ContactUs = () => {
    return (
        <Layout>
            <Link to={'/'}>
                Home
            </Link>
            <h1>this is contact page</h1>
        </Layout>
    )
}

export default ContactUs