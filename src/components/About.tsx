import React, { Component } from 'react';
import Header from './Header';
import image from '../images/1-removebg.png';
// import { Link } from 'react-router-dom';
// import { getUser } from '../services/userAPI';

export class About extends Component {
//   state = {
//     name: '',
//     isLoading: true,
//   };

//   async componentDidMount() {
//     // await getUser();
//     const user = JSON.parse(localStorage.getItem('user'));
//     this.setState({
//       name: user.name,
//       isLoading: false,
//     });
//   }

  render() {
    // const { name, isLoading } = this.state;
    return (
      <div>
          <Header></Header>
          <div className='about'>
            <main>
              <h1>Hello, I'm Guilherme Mansur and I'm a Full Stack Developer.</h1>
              <br></br>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perspiciatis assumenda, harum hic voluptas cupiditate sit libero recusandae rerum vero? Optio iusto tenetur, asperiores libero vel officia eaque quam recusandae?</h2>
            </main>

            <img src={ image } alt='Me'/>
          </div>
          {/* <Link></Link> */}
      </div>
    );
  }
}
export default About;