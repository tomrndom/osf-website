import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import Layout from '../components/Layout'
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO'
import Hero from '../components/Hero'

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
                <h1>Conversations Around All Things Open Infrastructure</h1>
                <p className="fix-h5">
                  Join us on OpenInfra Live — a weekly hour-long series sharing production case studies, open source demos, industry conversations, and the latest updates from the global open infrastructure community!
                </p>
                <p className="fix-h5">
                  Catch every episode on several streaming platforms, airing <strong>Thursdays at 14:00 UTC (9am CT)</strong>
                </p>
                <p className="fix-h5">
                  Subscribe to the <a href="https://www.openstack.org/community/email-signup">OpenInfra newsletter</a> to hear more about upcoming episodes.
                </p>
                <div className="platforms">
                  <a className="social-links" href="//youtube.com/c/OpenStackFoundation?sub_confirmation=1">
                    <img src="/img/socials/youtube.svg" className="social-icon youtube" alt="OpenInfra Live on YouTube"/>
                    Subscribe on YouTube
                  </a>
                  <a className="social-links" href="//www.linkedin.com/company/open-infrastructure-foundation/">
                    <img src="/img/socials/linkedin.svg" className="social-icon" alt="OpenInfra Live on LinkedIn"/>
                    Follow on LinkedIn
                  </a>
                  <a className="social-links" href="//www.facebook.com/openinfradev">
                    <img src="/img/socials/facebook.svg" className="social-icon" alt="OpenInfra Live on Facebook"/>
                    Follow on Facebook
                  </a>
                  <a className="social-links" href="//twitter.com/hashtag/OpenInfraLive?src=hashtag_click">
                    <img src="/img/socials/twitter.svg" className="social-icon" alt="OpenInfra Live on Twitter"/>
                    Join the Conversation
                  </a>
                </div>
              </div>
            </section>
          </div>
          <section className="live-section">
            <div className="container">
              <h2 className="section-title">The Next Episode Is Airing Soon!</h2>
              <div className="up-next-highlight">Up Next: Thursday, May 20 @ 14:00 UTC (9AM CT)</div>
              <section className="up-next-wrapper">
                <div className="video">
                  <div class="videoWrapper">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/yf5iFiCg_Tw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
                <div className="details">
                  <h2>Upgrades In Large Scale OpenStack Infrastructure</h2>
                  <p className="fix-h5">
                    Keeping up with new #OpenStack releases can be a challenge. At a very large scale, it can be daunting. In this episode of OpenInfra.Live, operators from some of the largest OpenStack deployments at Blizzard Entertainment, OVH, Bloomberg, Workday, Vexxhost or CERN will explain their upgrades methodology, share their experience, and answer the questions of our live audience. 
                  </p>
                  <p className="guests">
                    <span>Featuring</span>
                    Belmiro Moreira (CERN), Arnaud Morin (OVH). Mohammed Naser (Vexxhost), Imtiaz Chowdhury (Workday), Chris Morgan (Bloomberg), Joshua Slater (Blizzard)
                  </p>
                  <div className="platforms">
                    <a className="social-links" href="/invites/openinfralive-may20.ics">
                      <img src="/img/socials/calendar.svg" className="social-icon" alt="Add OpenInfra Live to your calendar"/>
                      Add to Calendar
                    </a>
                    <a className="social-links" href="https://www.youtube.com/watch?v=yf5iFiCg_Tw">
                      <img src="/img/socials/youtube.svg" className="social-icon" alt="OpenInfra Live on YouTube"/>
                      Watch on YouTube
                    </a>
                    <a className="social-links" href="https://www.linkedin.com/posts/open-infrastructure-foundation_openstack-openinfralive-activity-6798703708390719488-WarV/">
                      <img src="/img/socials/linkedin.svg" className="social-icon" alt="OpenInfra Live on LinkedIn"/>
                      Watch on LinkedIn
                    </a>
                    <a className="social-links" href="https://www.facebook.com/openinfradev">
                      <img src="/img/socials/facebook.svg" className="social-icon" alt="OpenInfra Live on Facebook"/>
                      Watch on Facebook
                    </a>
                  </div>
                </div>
              </section>
              <section className="more-recent-wrapper">
                <h2 className="section-title">While You’re Waiting, Here Are A Few Of The Most Recent Episodes</h2>
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
                          As edge computing use cases demand the cloud to break out of large data centers, they also put new challenges on infrastructure as the scale and geographical distribution is going through a yet unprecedented growth.
                        </p>
                        <div className="platforms">
                          <a className="social-links" href="//youtu.be/Hs8bp8NSYAM">
                            <img src="/img/socials/youtube.svg" className="social-icon" alt="OpenInfra Live on YouTube"/>
                            Watch on YouTube
                          </a>
                          <a className="social-links" href="https://superuser.openstack.org/articles/open-edge-infrastructure-conundrums-and-solutions-openinfra-live/">
                            <img src="/img/socials/superuser.svg" className="social-icon" alt="Read the recap on Superuser"/>
                            Superuser Recap
                          </a>
                        </div>
                    </div>
                  </div>
                  <div className="more-recent-single-right">
                    <div className="date">Thursday, May 6, 2021</div>
                    <div className="video">
                      <div class="videoWrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/-KeD5RFLNUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                    <div className="details">
                      <h2>The Future of the Network Depends on Open Infrastructure</h2>
                      <p className="description">
                        How different would your daily life be without constant, reliable high speed access to the Internet? While network access and 4G speeds have continued to improve, the speed of those networks is expected to decline for 3.3 billion people.
                      </p>
                      <div className="platforms">
                        <a className="social-links" href="//youtu.be/-KeD5RFLNUI">
                          <img src="/img/socials/youtube.svg" className="social-icon" alt="OpenInfra Live on YouTube"/>
                          Watch on YouTube
                        </a>
                        <a className="social-links" href="https://superuser.openstack.org/articles/the-future-of-the-network-depends-on-open-infrastructure/">
                          <img src="/img/socials/superuser.svg" className="social-icon" alt="Read the recap on Superuser"/>
                          Superuser Recap
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#all-episodes" className="schedule-link">
                  See All Previous Episodes
                   <img src="/img/icons/arrow-down.svg" className="link-icon" alt="See all previous episodes"/>
                </a>
              </section>
            </div>
          </section>
          <section className="schedule-wrapper">
            <div className="container">
              <h2 className="section-title">Upcoming OpenInfra Live Episodes</h2>
              <div class="schedule-list">
                {/* Start single episode */}
                <div className="schedule-single">
                  <div className="date">Thursday, May 20, 2021 @ 14:00 UTC (9AM CT)</div>
                  <div className="details">
                    <h2>Upgrades in Large Scale OpenStack infrastructure</h2>
                    <p className="fix-h5">
                      Keeping up with new #OpenStack releases can be a challenge. At a very large scale, it can be daunting. In this episode of OpenInfra.Live, operators from some of the largest OpenStack deployments at Blizzard Entertainment, OVH, Bloomberg, Workday, Vexxhost or CERN will explain their upgrades methodology, share their experience, and answer the questions of our live audience.
                    </p>
                    <p className="guests">
                      <span>Featuring</span>
                      Belmiro Moreira (CERN), Arnaud Morin (OVH). Mohammed Naser (Vexxhost), Imtiaz Chowdhury (Workday), Chris Morgan (Bloomberg), Joshua Slater (Blizzard)
                    </p>
                    <div className="platforms">
                      <a className="social-links" href="/invites/openinfralive-may20.ics">
                        <img src="/img/socials/calendar.svg" className="social-icon" alt="Add episode to your calendar"/>
                        Add to calendar
                      </a>
                    </div>
                  </div>
                </div>
                {/* End single episode */}
                {/* Start single episode */}
                <div className="schedule-single">
                  <div className="date">Thursday, May 27, 2021 @ 14:00 UTC (9AM CT)</div>
                  <div className="details">
                    <h2>Zuul - Automotive in Production</h2>
                    <p className="fix-h5">
                      Need to add description here.
                    </p>
                    <p className="guests">
                      <span>Featuring</span>
                      Need to complete
                    </p>
                    <div className="platforms">
                      <a className="social-links" href="/invites/openinfralive-may27.ics">
                        <img src="/img/socials/calendar.svg" className="social-icon" alt="Add episode to your calendar"/>
                        Add to calendar
                      </a>
                    </div>
                  </div>
                </div>
                {/* End single episode */}
                {/* Start single episode */}
                {/* <div className="schedule-single">
                  <div className="date">Thursday, June 3, 2021 @ 14:00 UTC (9AM CT)</div>
                  <div className="details">
                    <h2>Another Future Episode</h2>
                    <p className="fix-h5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis lorem rutrum, vehicula quam ultricies, malesuada neque. Mauris congue ante at sodales molestie. Duis ultrices lectus non tempus imperdiet.
                    </p>
                    <p className="guests">
                      <span>Featuring</span>
                      Need to complete
                    </p>
                    <div className="platforms"> */}
                      {/* Use https://ical.marudot.com to create calendar invites */}
                      {/* <a className="social-links">
                        <img src="/img/socials/calendar.svg" className="social-icon" alt="Add episode to your calendar"/>
                        Add to calendar
                      </a> */}
                    {/* </div>
                  </div>
                </div> */}
                {/* End single episode */}
              </div>
              <div className="ideas-banner">
                <div>
                  <h2>
                    <img src="/img/icons/bulb.svg" alt="Share ideas for OpenInfra Live"/>
                    Have an idea for an episode of OpenInfra Live?
                  </h2>
                  <p>
                    If you have any topics you would like to propose for an upcoming episode, please share your ideas with us! If selected, we’ll reach out to you to discuss details. We look forward to hearing your ideas!
                  </p>
                </div>
                <div>
                  <a href="//openinfrafoundation.formstack.com/forms/openinfralive">
                    Share now
                  </a>
                </div>
                <img src="/img/multi-color border.svg" className="multi-color-border" alt="" />
              </div>
            </div>
          </section>
          <section className="live-section">
            <div className="container">
              <h2 className="section-title" id="all-episodes">Watch Previous Episodes</h2>
              <div className="all-episode-list">
                {/* Start single episode */}
                <div className="all-episode-single">
                   <div className="video">
                      <div class="videoWrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Hs8bp8NSYAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                    <div className="details">
                      <div className="date">Thursday, May 13, 2021</div>
                      <h2>Open Edge Infrastructure Conundrums and Solution</h2>
                      <p className="fix-h5">
                        As edge computing use cases demand the cloud to break out of large data centers, they also put new challenges on infrastructure as the scale and geographical distribution is going through a yet unprecedented growth.
                      </p>
                      <p className="guests">
                        <span>Featuring</span>
                        Ildiko Vancsa, Gergely Csatari, Greg Waines, Matt Peters, and Mingyuan Qi
                      </p>
                      <div className="platforms">
                        <a className="social-links" href="//youtu.be/Hs8bp8NSYAM">
                          <img src="/img/socials/youtube.svg" className="social-icon" alt="OpenInfra Live on YouTube"/>
                          Watch on YouTube
                        </a>
                        <a className="social-links" href="https://superuser.openstack.org/articles/open-edge-infrastructure-conundrums-and-solutions-openinfra-live/">
                          <img src="/img/socials/superuser.svg" className="social-icon" alt="Read the recap on Superuser"/>
                          Read the Superuser Recap
                        </a>
                      </div>
                    </div>
                </div>
                {/* End single episode */}
                {/* Start single episode */}
                <div className="all-episode-single">
                   <div className="video">
                      <div class="videoWrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/-KeD5RFLNUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                    <div className="details">
                      <div className="date">Thursday, May 6, 2021</div>
                      <h2>The Future of the Network Depends on Open Infrastructure</h2>
                      <p className="fix-h5">
                       How different would your daily life be without constant, reliable high speed access to the Internet? While network access and 4G speeds have continued to improve, the speed of those networks is expected to decline for 3.3 billion people. Bridging this digital divide and improving global connectivity are critical to human progress. What are the possibilities, where will commercial success be found and what needs to change to improve connectivity around the world?
                      </p>
                      <p className="fix-h5">
                        In this episode of OpenInfra Live, Martin Casado, Bruce Davie and Amar Padmanabhan join Jonathan Bryce and Mark Collier to discuss the opportunities around connecting the globe, including leveraging open source technologies like Magma, software-based RAN and OpenStack.
                      </p>
                      <p className="guests">
                        <span>Featuring</span>
                        Martin Casado, Bruce Davie, Amar Padmanabhan, Jonathan Bryce, and Mark Collier
                      </p>
                      <div className="platforms">
                        <a className="social-links" href="//youtu.be/-KeD5RFLNUI">
                          <img src="/img/socials/youtube.svg" className="social-icon" alt="OpenInfra Live on YouTube"/>
                          Watch on YouTube
                        </a>
                        <a className="social-links" href="https://superuser.openstack.org/articles/the-future-of-the-network-depends-on-open-infrastructure/">
                          <img src="/img/socials/superuser.svg" className="social-icon" alt="Read the recap on Superuser"/>
                          Read the Superuser Recap
                        </a>
                      </div>
                    </div>
                </div>
                {/* End single episode */}
                {/* Start single episode */}
                <div className="all-episode-single">
                   <div className="video">
                      <div class="videoWrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/yIt4dJvTQVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                    <div className="details">
                      <div className="date">Thursday, April 29, 2021</div>
                      <h2>OpenInfra Project Teams Gathering Recap</h2>
                      <p className="fix-h5">
                        Join for a Project Teams Gathering (PTG) recap! Project leaders from OpenStack, Kata Containers, StarlingX, OpenStack Ironic, the Edge Computing Group, Scientific SIG, and Multi-Arch SIG provide recaps from discussions held at the PTG.
                      </p>
                      <p className="guests">
                        <span>Featuring</span>
                        Kendall Waters, Fabiano Fidencio, Rico Lin, Greg Waines, Ildiko Vancsa, Julia Kreger, and Stig Telfer
                      </p>
                      <div className="platforms">
                        <a className="social-links" href="//www.youtube.com/watch?v=yIt4dJvTQVg">
                          <img src="/img/socials/youtube.svg" className="social-icon" alt="OpenInfra Live on YouTube"/>
                          Watch on YouTube
                        </a>
                        <a className="social-links" href="//superuser.openstack.org/articles/project-teams-gathering-ptg-recap-openinfra-live/">
                          <img src="/img/socials/superuser.svg" className="social-icon" alt="Read the recap on Superuser"/>
                          Read the Superuser Recap
                        </a>
                      </div>
                    </div>
                </div>
                {/* End single episode */}
                {/* Start single episode */}
                <div className="all-episode-single">
                   <div className="video">
                      <div class="videoWrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/s4HOyAdQx8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                    <div className="details">
                      <div className="date">Thursday, April 22, 2021</div>
                      <h2>Behind the scenes of the OpenStack TC</h2>
                      <p className="fix-h5">
                        The OpenStack Technical Committee is the governing body of the OpenStack open source project. It is an elected group that represents the contributors to the project, and has oversight on all technical matters. This includes developers, operators and end users of the software. 
                      </p>
                      <p className="guests">
                        <span>Featuring</span>
                        Ashlee Ferguson, Ghanshyam Mann, Jay Bryant, Julia Krieger, Thierry Carrez, Dan Smith, Mohammed Naser, Radosław Piliszek, and Belmiro Moreira
                      </p>
                      <div className="platforms">
                        <a className="social-links" href="//youtu.be/s4HOyAdQx8A">
                          <img src="/img/socials/youtube.svg" className="social-icon" alt="OpenInfra Live on YouTube"/>
                          Watch on YouTube
                        </a>
                      </div>
                    </div>
                </div>
                {/* End single episode */}
                {/* Start single episode */}
                <div className="all-episode-single">
                   <div className="video">
                      <div class="videoWrapper">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/tZ2bfdF0fOg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                      </div>
                    </div>
                    <div className="details">
                      <div className="date">Thursday, April 15, 2021</div>
                      <h2>Wallaby Release Community Meeting</h2>
                      <p className="fix-h5">
                        Wallaby, the 23rd release of OpenStack, makes improvements to role-based access control (RBAC) and integration with other open source projects including Ceph, Kubernetes and Prometheus to strengthen open infrastructure for cloud native applications. 
                      </p>
                      <p className="guests">
                        <span>Featuring</span>
                        Erin Disney, Ghanshyam Mann, Kendall Nelson, Brian Rosmaita, Slawek Kaplonski, Julia Kreger, Balazs Gibizer, Xin-Ran Wang, Radosław Piliszek, and Goutham Pacha Ravi
                      </p>
                      <div className="platforms">
                        <a className="social-links" href="https://youtu.be/tZ2bfdF0fOg">
                          <img src="/img/socials/youtube.svg" className="social-icon" alt="OpenInfra Live on YouTube"/>
                          Watch on YouTube
                        </a>
                      </div>
                    </div>
                </div>
                {/* End single episode */}
              </div>
            </div>
          </section>
          <PageContent content={content} />
          {footer &&
            <Hero content={footer} />
          }
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
        footer={post.frontmatter.footer}
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
        footer {
          title
          subTitle
          button
          buttonText
          display
        }
      }
    }
  }
`
