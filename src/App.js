import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button } from 'semantic-ui-react';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Click Here</Button>
      </header>
    </div>
  );
}

export default App;