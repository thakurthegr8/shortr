import React from 'react'
import Layout from '../../utils/Layout'
import Logo from '../../elements/Logo'
import Typography from '../../utils/Typography'

const Footer = () => {
  return (
    <Layout>
        <Layout.Row className="py-4 w-full items-center justify-between">
            <Logo/>
            <Typography.Body>All rights reserved</Typography.Body>
        </Layout.Row>
    </Layout>
  )
}

export default Footer