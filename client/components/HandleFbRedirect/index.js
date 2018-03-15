import { React, Component, withRouter, connect } from '../../packages';
import { setUser } from '../../reducers/user';

/**
 * This handles whether or not the user is logged in
 * @extends Component
 */

class HandleFbRedirect extends Component {

  constructor() {
    super();
    this.checkLoginState = this.checkLoginState.bind(this);
    this.statusChangeCallback = this.statusChangeCallback.bind(this);
  }

  /**
   * @method componentDidMount initializes fbsdk
   */

  componentDidMount() {
    let self = this;
    window.fbAsyncInit = () => {

      FB.init({
        appId: '2027960510797048',
        cookie: true,
        xfbml: true,
        version: 'v2.8'
      });

      self.checkLoginState();

    };
  }

  /**
   * @method checkLoginState gets the 'logged in' status of the user
   */

  checkLoginState() {
    let self = this;
    FB.getLoginStatus(function(response) {
      self.statusChangeCallback(response);
    });
  }

  /**
   * @method statusChangeCallback directs the user to a route based on their connection status
   * @param  {object} response contains the status of the users connection
   */

  statusChangeCallback(response) {
    let self = this;
    if (response.status === 'connected') {
      FB.api(`/${response.authResponse.userID}/picture`, 'GET', {
        "redirect": "false"
      }, function(response) {
        self.props.setUser(response.data.url);
      });
      self.props.history.push('/');
      self.props.updatePathname('/');
    } else {
      self.props.history.push('/login');
      self.props.updatePathname('/login');
    }
  }

  render() {
    return (
      <div></div>
    );
  }
}

const mapDispatchToProps = {
  setUser: setUser
}

export default withRouter(connect(null, mapDispatchToProps)(HandleFbRedirect));
