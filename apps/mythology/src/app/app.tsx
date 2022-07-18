// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Global from '../components/styles/global';
import Home from '../feature/Home';
import Container from '../components/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Episode from '../feature/Episode';
import Navbar from '../feature/Navbar';
export function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar></Navbar>
      <Global/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/episode" element={<Episode />}/>


        </Routes>
     
      </BrowserRouter>
      {/* <NxWelcome title="mythology" /> */}
    </>
  );
}

export default App;
