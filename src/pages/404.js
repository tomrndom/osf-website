import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import TopBar from '../components/TopBar'

const NotFoundPage = () => (
  <Layout>
    <div className="wrapper project-background">
      <TopBar />
      <Navbar isLoggedUser={false} />
      <Header title="NOT FOUND" subTitle="You just hit a route that doesn&#39;t exist... the sadness." />
    </div>
    <div style={{ height: '45vw' }}>
    </div>
  </Layout>
)

export default NotFoundPage
