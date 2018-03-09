import { React, Component, BrowserRouter, Route } from './packages';
import { Login } from './components';
import './reset.scss';
import './main.scss';

/**
 * The root component
 * @extends Component
 */

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
