import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'

import { connect } from "react-redux";

export const OpenInfraLiveTemplate = ({
  isLoggedUser,
  contentComponent,
  content,
  footer
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
      <div className="wrapper project-background">
        <TopBar />
        <Navbar isLoggedUser={isLoggedUser} />
      </div>

      <main className="main">
        <div className="content">
          <div className="container">
            <section className="live-hero">
              <figure className="logo">
                <img src="/img/OpenInfra-live-logo-RGB.svg" alt="OpenInfra Live"/>
              </figure>
              <div className="text">
                <h1>Conversations around all things open infrastructure</h1>
                <p className="fix-h5">Introducing: OpenInfra Live—a weekly hour-long series sharing production case studies, open source demos, industry conversations, and the latest updates from the global open infrastructure community!</p>
                <p className="fix-h5">Catch every episode on several streaming platforms, airing <strong>Thursdays at 14:00 UTC (9am CT)</strong></p>
                <div className="platforms">
                  <a className="social-links">
                    <img src="/img/socials/youtube.svg" className="social-icon youtube" alt="OpenInfra Live on YouTube"/>
                    Subscribe on YouTube
                  </a>
                  <a className="social-links">
                    <img src="/img/socials/linkedin.svg" className="social-icon" alt="OpenInfra Live on LinkedIn"/>
                    Follow on LinkedIn
                  </a>
                  <a className="social-links">
                    <img src="/img/socials/facebook.svg" className="social-icon" alt="OpenInfra Live on Facebook"/>
                    Follow on Facebook
                  </a>
                </div>
              </div>
            </section>
          </div>
          <section className="live-section">
            <div className="container">
              <h2 className="section-title">The next episode is airing soon!</h2>
              <div className="up-next-highlight">Up Next: Thursday, May 20 @ 14:00 UTC (9AM CT)</div>
              <section className="up-next-wrapper">
                <div className="video">
                  <div class="videoWrapper">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Hs8bp8NSYAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="details">
                  <h2>Upgrades in Large Scale OpenStack infrastructure</h2>
                  <p className="fix-h5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis lorem rutrum, vehicula quam ultricies, malesuada neque. Mauris congue ante at sodales molestie. Duis ultrices lectus non tempus imperdiet. Nunc eget rhoncus elit. Praesent et arcu dictum, condimentum lectus vitae, maximus nisl.
                  </p>
                  <p className="guests">
                    <span>Featuring</span>
                    Belmiro Moreira (CERN), Arnaud Morin (OVH). Mohammed Naser (Vexxhost), Imtiaz Chowdhury (Workday), Chris Morgan (Bloomberg), Joshua Slater (Blizzard)
                  </p>
                  <div className="platforms">
                    <a className="social-links">
                      <img src="/img/socials/calendar.svg" className="social-icon" alt="Add OpenInfra Live to your calendar"/>
                      Add to Calendar
                    </a>
                    <a className="social-links">
                      <img src="/img/socials/youtube.svg" className="social-icon" alt="OpenInfra Live on YouTube"/>
                      Watch on YouTube
                    </a>
                    <a className="social-links">
                      <img src="/img/socials/linkedin.svg" className="social-icon" alt="OpenInfra Live on LinkedIn"/>
                      Watch on LinkedIn
                    </a>
                    <a className="social-links">
                      <img src="/img/socials/facebook.svg" className="social-icon" alt="OpenInfra Live on Facebook"/>
                      Watch on Facebook
                    </a>
                  </div>
                </div>
              </section>
              <section className="more-recent-wrapper">
                <h2 className="section-title">While you’re waiting, here are a few of the most recent episodes</h2>
                <div className="more-recent-episodes">
                  <div className="more-recent-single-left">
                    <div className="date">Thursday, May 13, 2021</div>
                      <div className="video">
                        <div class="videoWrapper">
                          <iframe width="560" height="315" src="https://www.youtube.com/embed/Hs8bp8NSYAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                      </div>
                      <div className="details">
                        <h2>Open Edge Infrastructure Conundrums and Solution</h2>
                        <p className="description">
                          As edge computing use cases demand the cloud to break out of large data centers, they also put new challenges on infrastructure and something longer to see if ellipsis works
                        </p>
                        <div className="platforms">
                          <a className="social-links">
                            <img src="/img/socials/youtube.svg" className="social-icon" alt="OpenInfra Live on YouTube"/>
                            Watch on YouTube
                          </a>
                          <a className="social-links">
                            <img src="/img/socials/calendar.svg" className="social-icon" alt="Read the recap on Superuser"/>
                            Superuser recap
                          </a>
                        </div>
                    </div>
                  </div>
                  <div className="more-recent-single-right">
                    <div className="date">Thursday, May 13, 2021</div>
                    <div className="video">
                      <div class="videoWrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Hs8bp8NSYAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                    <div className="details">
                      <h2>The Future of the Network Depends on Open Infrastructure</h2>
                      <p className="description">
                        How different would your daily life be without constant, reliable high speed access to the Internet? While network access and 4G speeds and something longer to see if ellipsis works
                      </p>
                      <div className="platforms">
                        <a className="social-links">
                          <img src="/img/socials/youtube.svg" className="social-icon" alt="OpenInfra Live on YouTube"/>
                          Watch on YouTube
                        </a>
                        <a className="social-links">
                          <img src="/img/socials/calendar.svg" className="social-icon" alt="Read the recap on Superuser"/>
                          Superuser recap
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="schedule-link">
                  See all previous episodes
                   <img src="/img/icons/arrow-down.svg" className="link-icon" alt="See all previous episodes"/>
                </a>
              </section>
              <PageContent content={content} />
            </div>
          </section>
          <section className="schedule-wrapper">
            <div className="container">
              <h2 className="section-title">More upcoming episodes</h2>
              <div class="schedule-list">
                <div className="schedule-single">
                  <div className="date">Thursday, May 20, 2021 @ 14:00 UTC (9AM CT)</div>
                  <div className="details">
                    <h2>The Future of the Network Depends on Open Infrastructure</h2>
                    <p className="fix-h5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis lorem rutrum, vehicula quam ultricies, malesuada neque. Mauris congue ante at sodales molestie. Duis ultrices lectus non tempus imperdiet.
                    </p>
                    <p className="guests">
                      <span>Featuring</span>
                      Belmiro Moreira (CERN), Arnaud Morin (OVH). Mohammed Naser (Vexxhost), Imtiaz Chowdhury (Workday), Chris Morgan (Bloomberg), Joshua Slater (Blizzard)
                    </p>
                    <div className="platforms">
                      <a className="social-links">
                        <img src="/img/socials/calendar.svg" className="social-icon" alt="Add episode to your calendar"/>
                        Add to calendar
                      </a>
                    </div>
                  </div>
                </div>
                <div className="schedule-single">
                  <div className="date">Thursday, May 20, 2021 @ 14:00 UTC (9AM CT)</div>
                  <div className="details">
                    <h2>The Future of the Network Depends on Open Infrastructure</h2>
                    <p className="fix-h5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis lorem rutrum, vehicula quam ultricies, malesuada neque. Mauris congue ante at sodales molestie. Duis ultrices lectus non tempus imperdiet.
                    </p>
                    <p className="guests">
                      <span>Featuring</span>
                      Belmiro Moreira (CERN), Arnaud Morin (OVH). Mohammed Naser (Vexxhost), Imtiaz Chowdhury (Workday), Chris Morgan (Bloomberg), Joshua Slater (Blizzard)
                    </p>
                    <div className="platforms">
                      <a className="social-links">
                        <img src="/img/socials/calendar.svg" className="social-icon" alt="Add episode to your calendar"/>
                        Add to calendar
                      </a>
                    </div>
                  </div>
                </div>
                <div className="schedule-single">
                  <div className="date">Thursday, May 20, 2021 @ 14:00 UTC (9AM CT)</div>
                  <div className="details">
                    <h2>The Future of the Network Depends on Open Infrastructure</h2>
                    <p className="fix-h5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis lorem rutrum, vehicula quam ultricies, malesuada neque. Mauris congue ante at sodales molestie. Duis ultrices lectus non tempus imperdiet.
                    </p>
                    <p className="guests">
                      <span>Featuring</span>
                      Belmiro Moreira (CERN), Arnaud Morin (OVH). Mohammed Naser (Vexxhost), Imtiaz Chowdhury (Workday), Chris Morgan (Bloomberg), Joshua Slater (Blizzard)
                    </p>
                    <div className="platforms">
                      <a className="social-links">
                        <img src="/img/socials/calendar.svg" className="social-icon" alt="Add episode to your calendar"/>
                        Add to calendar
                      </a>
                    </div>
                  </div>
                </div>
                <div className="schedule-single">
                  <div className="date">Thursday, May 20, 2021 @ 14:00 UTC (9AM CT)</div>
                  <div className="details">
                    <h2>The Future of the Network Depends on Open Infrastructure</h2>
                    <p className="fix-h5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis lorem rutrum, vehicula quam ultricies, malesuada neque. Mauris congue ante at sodales molestie. Duis ultrices lectus non tempus imperdiet.
                    </p>
                    <p className="guests">
                      <span>Featuring</span>
                      Belmiro Moreira (CERN), Arnaud Morin (OVH). Mohammed Naser (Vexxhost), Imtiaz Chowdhury (Workday), Chris Morgan (Bloomberg), Joshua Slater (Blizzard)
                    </p>
                    <div className="platforms">
                      <a className="social-links">
                        <img src="/img/socials/calendar.svg" className="social-icon" alt="Add episode to your calendar"/>
                        Add to calendar
                      </a>
                    </div>
                  </div>
                </div>
                <div className="schedule-single">
                  <div className="date">Thursday, May 20, 2021 @ 14:00 UTC (9AM CT)</div>
                  <div className="details">
                    <h2>The Future of the Network Depends on Open Infrastructure</h2>
                    <p className="fix-h5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis lorem rutrum, vehicula quam ultricies, malesuada neque. Mauris congue ante at sodales molestie. Duis ultrices lectus non tempus imperdiet.
                    </p>
                    <p className="guests">
                      <span>Featuring</span>
                      Belmiro Moreira (CERN), Arnaud Morin (OVH). Mohammed Naser (Vexxhost), Imtiaz Chowdhury (Workday), Chris Morgan (Bloomberg), Joshua Slater (Blizzard)
                    </p>
                    <div className="platforms">
                      <a className="social-links">
                        <img src="/img/socials/calendar.svg" className="social-icon" alt="Add episode to your calendar"/>
                        Add to calendar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ideas-banner">
                <div>
                  <h2>Have an idea for an episode of OpenInfra Live?</h2>
                  <p>We love hearing from the OpenInfra community and want to use OpenInfra Live as a way to do that. If you have an idea for a future epside, we’d love to hear it. If selected, we’ll reach out to you to discuss details. We look forward to hearing your ideas!</p>
                </div>
                <div>
                  <a href="#">
                    Share now
                  </a>
                </div>
                <img src="/img/multi-color border.svg" className="multi-color-border" alt="" />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

OpenInfraLiveTemplate.propTypes = {
  header: PropTypes.object,
  members: PropTypes.array,
}

const OpenInfraLivePage = ({ OpenInfraLivePage, data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SEO seo={post.frontmatter.seo ? post.frontmatter.seo : null} />
      <OpenInfraLiveTemplate
        OpenInfraLivePage={OpenInfraLivePage}
        contentComponent={HTMLContent}
        header={post.frontmatter.header}
        members={post.frontmatter.members}
        content={post.html}
      />
    </Layout>
  )
}

OpenInfraLivePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default connect(state => ({
  isLoggedUser: state.loggedUserState.isLoggedUser
}), null)(OpenInfraLivePage)


export const OpenInfraLivePageQuery = graphql`
  query OpenInfraLivePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        seo {
          title
          description
          url
          image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          twitterUsername
        }
        hero {
          title
          description
        }
        members {
          name
          picture {
            childImageSharp {
              fluid(maxWidth: 640, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          title
          company
          description
          openStack
          twitter
          linkedin
        }
      }
    }
  }
`
