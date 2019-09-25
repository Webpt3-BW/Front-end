import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {URL} from '../../Utilities/Constants';
import axios from 'axios';

class Register extends Component {
    state = {
      credentials: {
        email: '',
        password: '',
        userName: '',
      }
    }
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      })
    }
  
    onSubmit = e => {
      e.preventDefault()
      let creds = this.state.credentials;
       axios
        .post(`${URL}/api/registration`, creds)
        .then(res=> {
            console.log("register actions resdata",res.data)
            localStorage.setItem('token', res.data.token)
        })
        .catch(err=> {
            console.log(err)
        })
        .then(() => {
        this.props.history.push({
          pathname: '/login',
          state: {
            email: this.state.credentials.email,
            password: this.state.credentials.password
          }
        })
        })
    }

    // register = (creds) => {
    //     return axios
    //     .post(`${URL}/api/user/register`, creds)
    //     .then(res=> {
    //         console.log("register actions resdata",res.data)
    //         localStorage.setItem('token', res.data.token)
    //     })
    //     .catch(err=> {
    //         console.log(err)
    //     })
    // }
  
    render(){
        return(
            <div className="ui container">
              <h2>Registration Page</h2>
              <Link to="/login">Login here.</Link> 
              <div className="ui placeholder segment">
                <form className="ui form" onSubmit={this.onSubmit}>
                  <div className="field">
                    <label>User Name</label>
                    <div className="ui left icon input">
                      <input 
                        id="user_name"
                        type="text"
                        name="user_name"
                        placeholder="User Name"
                        value={this.state.credentials.user_name}
                        onChange={this.handleChange}
                      />
                      <i aria-hidden="true" className="user icon"></i>
                    </div>
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <div className="ui left icon input">
                      <input 
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Email Address"
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                      />
                      <i aria-hidden="true" className="address card icon"></i>
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
                  <button className="ui red button">Register</button>
                </form>
              </div>
            </div>
        )
    }
  }

export default Register;