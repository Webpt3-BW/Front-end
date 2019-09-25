import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {URL} from '../../Utilities/Constants';
import axios from 'axios';

class Login extends Component {
    state = {
      credentials: {
        email: '',
        password: ''
      }
    }

    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };

    loginAttempt = e => {
      e.preventDefault();
      let creds = this.state.credentials;
      axios
        .post(`${URL}/api/login`, creds)
        .then(res=> {
            console.log("register actions resdata",res.data)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem("user_id", res.data.id)
        })
        .catch(err=> {
            console.log(err)
        })
        .then(() => {
          this.props.history.push("/dashboard");
        })
    };

    // login = (e, creds) => {
    //     return axios
    //     .post(`${URL}/api/user/register`, creds)
    //     .then(res=> {
    //         console.log("register actions resdata",res.data)
    //         localStorage.setItem('token', res.data.token)
    //         localStorage.setItem("user_id", res.data.id)
    //     })
    //     .catch(err=> {
    //         console.log(err)
    //     })
    // }
  
  
    render(){
        return(
            <div className="ui container">
              <h2>Login Page</h2>
              <Link to="/register">Register here.</Link> 
              <div className="ui placeholder segment">
                <form className="ui form" onSubmit={this.loginAttempt}>
                  <div className="field">
                    <label>Username</label>
                    <div className="ui left icon input">
                      <input 
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                      />
                      <i aria-hidden="true" className="user icon"></i>
                    </div>
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <div className="ui left icon input">
                      <input 
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                      />
                      <i aria-hidden="true" className="lock icon"></i>
                    </div>
                  </div>
                  <button className="ui red button">Login</button>
                </form>
              </div>
            </div>
        )
    }
  }
  

export default Login;