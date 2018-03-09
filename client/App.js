import { React, Component, BrowserRouter, Route } from './packages';
import { Login, Home, HandleFbRedirect, Nav } from './components';
import './reset.scss';
import './main.scss';

/**
 * The root component
 * @extends Component
 */

class App extends Component {

  constructor() {
    super();
    this.state = {
      pathname: window.location.pathname
    }
    this.updatePathname = this.updatePathname.bind(this);
  }

  /**
   * @method updatePathname this helps control whether or not the Nav component shows
   * @param  {string} pathname the current pathname in the url
   */

  updatePathname(pathname) {
    this.setState({pathname: pathname});
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {this.state.pathname !== '/login' ? (<Nav />) : null}
          <HandleFbRedirect updatePathname={this.updatePathname} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
