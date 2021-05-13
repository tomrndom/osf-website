import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import Header from '../components/Header'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero'

import NotFoundPage from "../pages/404"

import { AjaxLoader } from "openstack-uicore-foundation/lib/components";

import { connect } from "react-redux";

import LinkComponent from '../components/LinkComponent'

export const CompanyProfilePageTemplate = ({
  isLoggedUser,
  company,
  loading,
  footer,
}) => {

  if (loading) {
    return <AjaxLoader relative={true} color={'#ffffff'} show={loading} size={120} />
  } else {
    if (company) {
      return (
        <div>
          <div className="wrapper project-background">
            <TopBar />
            < Navbar isLoggedUser={isLoggedUser} />
            <Header title={company.name} subTitle='Company Profile' />
            <div className="company-profile-logo">
              <LinkComponent href={company.url}>
                <img src={company.big_logo ? company.big_logo : company.logo} alt={`${company.name}-logo`} />
              </LinkComponent>
            </div>
          </div >

          <main className="main">
            <div className="content">
              <section className="section about-s1-main">
                <div className="container about-s1-container">
                  <div className="columns">
                    <div className="column">
                      {company.description &&
                        <>
                          <h2>Description</h2>
                          <span dangerouslySetInnerHTML={{ __html: company.description }} />
                        </>
                      }
                      {company.contributions &&
                        <>
                          <h2>Contributions To OpenStack From {company.name}</h2>
                          <span dangerouslySetInnerHTML={{ __html: company.contributions }} />
                        </>}
                      {company.products &&
                        <>
                          <h2>Products & Services</h2>
                          <span dangerouslySetInnerHTML={{ __html: company.products }} />
                        </>
                      }
                      {/* <h2>For More Information</h2>
                  <span dangerouslySetInnerHTML={{ __html: moreInformation }} /> */}
                    </div>
                  </div>
                </div>
              </section>
              {footer &&
                <Hero content={footer} />
              }
            </div>
          </main>
        </div >
      )
    } else {
      return <NotFoundPage />
    }
  }

}

CompanyProfilePageTemplate.propTypes = {
  seo: PropTypes.object,
  title: PropTypes.string,
  name: PropTypes.string,
  logo: PropTypes.object,
  description: PropTypes.string,
  contributions: PropTypes.string,
  productsServices: PropTypes.string,
  moreInformation: PropTypes.string,
}

const CompanyProfilePage = ({ isLoggedUser, location, sponsors }) => {

  const [company, setCompany] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {    
    const sponsorshipType = parseInt(location.pathname.replace('/companies/profile/', '').split('/')[0]);
    const companyId = parseInt(location.pathname.replace('/companies/profile/', '').split('/')[1]);    
    setCompany(sponsors.find(type => type.id === sponsorshipType)?.supporting_companies.find(c => c.id === companyId)?.company || null);
    setLoading(false);
  }, [])


  return (
    <Layout>
      <CompanyProfilePageTemplate
        isLoggedUser={isLoggedUser}
        company={company}
        loading={loading}
      />
    </Layout>
  )
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser,
  sponsors: state.sponsorState.sponsorshipTypes
}), null)(CompanyProfilePage);