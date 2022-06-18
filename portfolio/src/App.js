import React, {useState} from 'react';
import About from './components/About';
import SideNav from './components/Nav';
import './index.css'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { ImageData } from './components/Resume/images';

function App() {
const [wid, setWid] = useState('0%')

const openSideNav = () => {
  setWid('15%')
}

const closeSidenav = () => {
  setWid('0%')
}

  return (
    <div>
      <button onClick={openSideNav}>Open</button>
      <SideNav name='Enrique' width={wid} closeNav={closeSidenav} />
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Resume slide={ImageData}></Resume>
      </main>
    </div>
  );
}

export default App;
