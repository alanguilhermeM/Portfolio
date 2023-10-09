import React, { Component } from 'react';
import Header from './Header';

export class Tecnologies extends Component {
  render() {
    return (
      <div>
          <Header></Header>
          <div className='tecnologies'>
            <div>
              <h1>Front-End</h1>
            </div>
            <div>
              <h1>Back-End</h1>
            </div>
            <div>
              <h1>Testes</h1>
            </div>
            <div>
              <h1>Tools</h1>
            </div>
          </div>
      </div>
    );
  }
}
export default Tecnologies;