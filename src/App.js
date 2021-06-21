import logo from './logo.svg';
import './App.css';
import Homepage from '../src/pages/homepage/Homepage.components';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' component = {Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
