import React, { Component } from 'react';
import './App.css'
import Header from './component/docplanner/component-header/header.js'
import Main from './component/docplanner/component-main/main.js'
import Footer from './component/docplanner/component-footer/footer.js'
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
     );
  }
}
 
export default App;
