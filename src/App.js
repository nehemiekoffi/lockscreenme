import React from 'react';
import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import Header from "./components/Header";
import LockScreenApp from "./components/LockScreenApp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Container>

          <Header />

          <LockScreenApp />

          <div className="section Support-Info">
            <h3>Do you have Issues or suggestions ?</h3>
            <p>Feel free to contact me at nehemiekoffi@gmail.com</p>
          </div>

          <Footer />
          


      </Container>
    </div>
  );
}

export default App;
