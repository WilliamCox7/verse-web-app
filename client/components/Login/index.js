import { React, Component, withRouter } from '../../packages';
import { logoLogin } from '../../assets';
import './style.scss';

/**
 * The Login Screen
 * @extends Component
 */

class Login extends Component {

  constructor() {
    super();
    this.login = this.login.bind(this);
  }

  /**
   * @method login this accesses fbsdk and logs in the user
   */

  login() {
    let self = this;
    FB.login(function(response) {
      if (response.status === 'connected') {
        self.props.history.push('/');
      } else {
        self.props.history.push('/login');
      }
    });
  }

  render() {
    return (
      <div className="Login flex jc-c">
        <div className="logo flex jc-c ai-c">
          <img src={logoLogin} />
        </div>
        <div className="fb-login-button" onClick={this.login}>
          <i className="material-icons">vpn_key</i>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
