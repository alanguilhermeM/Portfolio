import React, { Component } from 'react';
import Header from './Header';
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
          <h2>Guilherme Boladão</h2>
          {/* <Link></Link> */}
      </div>
    );
  }
}
export default Header;