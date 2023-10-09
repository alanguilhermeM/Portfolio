import { Component } from 'react';
// import styles from '../styles/header.module.css';

export class Header extends Component {
  render() {
    return (
      <div>
        {
          <header data-testid="header" className='header'>
            {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdUlEQVR4nO2XzUrEQAzH59CmuLKCuKDiq6gIIoIgKvhgvsCKCl72qihsUiZpe/ABBE9+3RXUiyD4wbR4WvdWdzolf5hLU9r88k86U2NUKpVK5UNA8t2GZXwnoCCkjoj39gGdEfJfaVBHyH91QR2hOqvDn0DSj9Aum6LoGmt7Cdo1QBkA8lcgjvBrMszWxx6HUt4ClPdmg6CrNm+7hKeIloDkFEhegPgZSI6niears12232iQmPisLLu1vRjl/o/4rcnzWXdLjJw2FgQo262SlIP/qDhMCqRj7UIJQvwYNIgZXEM5A8gf7XAE5WHkJRP4oTP1PYz3xs1IUCAx8XmZIeJcTHw3Gpcbc3E103gQcAtlxyXZuZRFQDmp9hF5ApRD91kOwhEoQfgtId4Yt7MnQ9kMA4R+z1p8FBGvlK1UFN0olVV3zcUCAhEvy/hOQEFIHRHv7QM6I+S/0qCOUKCOqEIVkOQeWiZvBwhKVjuISqVSqUyN+gHUlbw+006BTgAAAABJRU5ErkJggg==" alt='Guilherme'/> */}

            <h2>Guilherme Mansur | Software Developer</h2>
            <nav className='nav_header'>
              <a href='/'>About Me</a>
              {/* <a href='/experience'>Experience</a> */}
              <a href='/tecnologies'>Tecnologies</a>
              <a href='/projects'>Projects</a>
              <a href='/contact'>Contact</a>
            </nav>
            {/* <Link></Link> */}
          </header>
        }
      </div>
    );
  }
}
export default Header;