import './App.css';

import React from "react";
import Posts from './Posts';
import { Route, Switch} from "react-router-dom";
import Start from './Start';
import ModalId from './ModelId';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path='/posts' exact component={Posts}/>
        
        <Route path='/post/id' exact component={ModalId} />
      </Switch>
    </div>
  );
}

export default App;
