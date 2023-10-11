import React, { Component } from 'react';
import Header from './Header';
import typeScript from '../images/icons8-typescript-62.png';
import python from '../images/python-logo-only.png';
import chai from '../images/chaijs_logo_icon_168435.png';


export class Tecnologies extends Component {
  render() {
    return (
      <div>
          <Header></Header>
          <div className='tecnologies'>
            <div className='skill-card'>
              <h1 className='skill-title'>Front-End</h1>

              <section>
                <img src="https://camo.githubusercontent.com/442c452cb73752bb1914ce03fce2017056d651a2099696b8594ddf5ccc74825e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667" alt='JS' className='img'/>
                <h4>JavaScript</h4>
              </section>

              <section>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='React' className='img'/>
                <h4>React</h4>
              </section>

              <section>
                <img src="https://camo.githubusercontent.com/2b6b50702c658cdfcf440cef1eb88c7e0e5a16ce0eb6ab8bc933da7697c12213/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656475782f72656475782d6f726967696e616c2e737667" alt='Redux' className='img'/>
                <h4>Redux</h4>
              </section>

              <section>
                <img src={ typeScript } alt='TS' className='img'/>
                <h4>TypeScript</h4>
              </section>
            </div>
            <div className='skill-card'>
              <h1 className='skill-title'>Back-End</h1>
              <section>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt='express' className='img'/>
                <h4>Express</h4>
              </section>

              <section>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt='Docker' className='img'/>
                <h4>Docker</h4>
              </section>

              <section>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt='mySQL' className='img'/>
                <h4>MySQL</h4>
              </section>

              <section>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt='NodeJs' className='img'/>
                <h4>NodeJs</h4>
              </section>

              <section>
                <img src={ python } alt='Python' className='img'/>
                <h4>Python</h4>
              </section>
            </div>
            <div className='skill-card'>
              <h1 className='skill-title'>Testes</h1>
              <section>
                <img src="https://camo.githubusercontent.com/fd37a0ed465d6e14411705324a0d21739377f54ab6d0ae146c68fca8777e16c7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6573742f6a6573742d706c61696e2e737667" alt='Jest' className='img'/>
                <h4>Jest</h4>
              </section>
              
              <section>
                <img src="https://camo.githubusercontent.com/aa85cea585880ae694b4fe8dde116d092b8907d6351c71fcd76f00f7586fad72/68747470733a2f2f74657374696e672d6c6962726172792e636f6d2f696d672f6f63746f7075732d313238783132382e706e67" alt='RTL' className='img' />
                <h4>RTL</h4>
              </section>
              
              <section>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" alt='Mocha' className='img' />
                <h4>Mocha</h4>
              </section>

              <section>
                <img src={ chai } alt='Chai' className='img'/>
                <h4>Chai</h4>
              </section>
            </div>
            <div className='skill-card'>
              <h1 className='skill-title'>Tools</h1>

              <section>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt='VsCode' className='img'/>
                <h4>VsCode</h4>
              </section>

              <section>
                <img src="https://camo.githubusercontent.com/c3fc2502421ea45b46698a4db62f25d0ef49c765f197b1a8fd00eaed5548b1db/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f736c61636b2f736c61636b2d6f726967696e616c2e737667" alt='Slack' className='img'/>
                <h4>Slack</h4>
              </section>

              <section>
                <img src="https://camo.githubusercontent.com/dc9e7e657b4cd5ba7d819d1a9ce61434bd0ddbb94287d7476b186bd783b62279/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d6f726967696e616c2e737667" alt='Git' className='img'/>
                <h4>Git</h4>
              </section>

              <section>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" alt='Ubunto' className='img'/>
                <h4>Ubunto</h4>
              </section>
            </div>
          </div>
      </div>
    );
  }
}
export default Tecnologies;