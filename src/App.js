import React, { Component } from 'react';
import './App.css';

import TopBar from './components/topSide/TopBar';
import Profil from './components/middleSide/profil/Profil';
import Competences from './components/middleSide/competences/Competences';
import Parcours from './components/middleSide/parcours/Parcours';
import ExpPro from './components/middleSide/expPro/ExpPro';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalReducer from './reducers';
const store = createStore(globalReducer);

class App extends Component {

  render(){

    return (
      <Provider store={store}>
        <div>
          <TopBar/>
          <main>
            <Profil/>
            <Parcours/>
            <Competences/>
            <ExpPro/>
          </main>
          
        </div>
      </Provider>
      
    );
  }
}

export default App;

