import React from 'react';
import MenuBar from "./components/menu";
import MainForm from "./components/form";
import Header from "./components/header";
import './index.css';

function App() {
  return <>
    <div id={'mainLayout'}>
    <MenuBar></MenuBar>
      <div>
        <Header></Header>
        <MainForm></MainForm>
      </div>

    </div>
  </>
}

export default App;
