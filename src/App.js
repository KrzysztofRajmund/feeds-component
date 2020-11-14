import React from 'react';
//redux
import { Provider } from "react-redux";
import store from "./store";
//components
import FeedsComponent from './components/FeedsComponent';

function App(props) {
  return (
  
  <Provider store={store}>
    <div className="App">
   <FeedsComponent/>
    </div>
   </Provider>

  );
}

export default App;
