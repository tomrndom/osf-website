import React from 'react'
import logo from '../img/svg/OSF_logo.svg'
import Menu from "../content/navbar.json"
import LinkComponent from './LinkComponent'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav className="nav">
        <div className="container">
          <div className="nav-inner">
            <div className="nav-brand">
              <LinkComponent href="/" className="router-link-exact-active router-link-active">
                <div className="logo-containter">
                  <div className="logo-containter-child logo-containter-child-img">
                    <img src={logo} alt="OpenStack Foundation" />
                  </div>
                </div>
              </LinkComponent>
            </div>
            <a role="button" aria-label="menu" aria-expanded="false" className={`navbar-burger burger ${this.state.navBarActiveClass}`} onClick={() => this.toggleHamburger()}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span></a>
            <div className={`nav-content menu-container ${this.state.navBarActiveClass}`}>
              <ul className="nav-menu menu-item">
                {Menu.nav.map((li, index) => {
                  if(li.display) {
                    return (
                      <li key={index}>
                        <div className="dropdown is-hoverable">
                          <div className="dropdown-trigger">
                            <button aria-haspopup="true" aria-controls="dropdown-menu" className="button">
                              <span>{li.title}</span>
                            </button>
                          </div>
                          <div id="dropdown-menu" role="menu" className="dropdown-menu">
                            <div className="dropdown-content">
                              <div className="nested-menu-image">
                                <img src={li.image} alt="" style={li.marginLeft ? { marginLeft: li.marginLeft } : {}} />
                              </div>
                              {li.links.map((link, index) => {
                                return (
                                  <div className="menuitemeffect" key={index}>
                                    <LinkComponent href={link.url} className="dropdown-item">
                                      <span>{link.text} </span>
                                    </LinkComponent>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                  }
                })}                
                <li>
                  <LinkComponent href={Menu.button.url} className="bar-button">{Menu.button.text}</LinkComponent>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
