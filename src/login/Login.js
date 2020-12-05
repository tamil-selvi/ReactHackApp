import React from "react";
import Header from '../header/Header';
import SearchItem from '../searchSection/SearchItem';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
      isLogginActive: true
    };

  }

  handleUserChange(evt) {    
    this.setState({
      password: evt.target.value,
    });
  };

  handlePasswordChange(evt) {

    debugger;
    this.setState({
      username: evt.target.value,
    });
  };

  handleSubmit(evt) {
    evt.preventDefault();

    debugger;
    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }
 
    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    this.setState(
      {
        isLogginActive: false
      }
    )
  }

  render() {

    let isLogginActive = this.state.isLogginActive;
    return (

      <div className="base-container" ref={this.props.containerRef}>

        {isLogginActive && (
          <div>
            <div className="header">User Login </div>
            <div className="content">
              <div className="image">
                {/* <img src={loginImg} /> */}
              </div>
              <div className="form">
                <div className="form-group">
                  <label htmlFor="username">Username </label>
                  <input type="text" name="username" placeholder="username" onChange={(event) => this.handleUserChange(event)} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password </label>
                  <input type="password" name="password" placeholder="password" onChange={(event) => this.handlePasswordChange(event)}  />
                </div>
              </div>
            </div>
            <div className="footer">
              <button type="button" className="btn" onClick={(event) => this.handleSubmit(event)}  >
                Login
            </button>
            </div>

          </div>)}

        {!isLogginActive && (
          <div>
            <Header isLogginActive={this.isLogginActive} ref={this.containerRef}  ></Header>
            <SearchItem getCityList={this.getCityList} />
          </div>
        )}



      </div>




    );
  }
}

export default Login;
