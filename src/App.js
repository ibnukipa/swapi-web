// @flow

import 'semantic-ui-css/semantic.min.css';
import './App.css';
import RouteRoot from './routes/RouteRoot';
import { Provider } from 'react-redux';

import store from './storage/store';

function App() {
  return (
    <Provider store={store}>
      <RouteRoot />
    </Provider>
  );
}

export default App;
