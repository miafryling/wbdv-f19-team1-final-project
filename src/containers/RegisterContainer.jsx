import React from 'react'
import {UserService} from "../services/UserService";
import {connect} from "react-redux";
import {createUserAction} from "../reducer/ActionCreaters";
import {Link} from "react-router-dom";

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props)
        this.userService = UserService.instance;
        this.state = {
            username: '',
            password: '',
            confirmPassword: ''
        }
    }

    usernameChanged = (event) => this.setState({username: event.target.value})
    passwordChanged = (event) => this.setState({password: event.target.value})
    confirmPasswordChanged = (event) => this.setState({confirmPassword: event.target.value})

    render() {
        const {createUser} = this.props;
        return (
            <div className="container">
                <h1>Sign Up</h1>
                <h4 className="wbdv-cancel">
                    <Link to='/'>
                        Cancel
                    </Link>
                </h4>
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="username">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   placeholder="Username"
                                   onChange={this.usernameChanged}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="password">
                            Password </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="password"
                                   placeholder="Password" type="password"
                                   onChange={this.passwordChanged}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="password">
                            Verify<br/> Password </label>
                        <div className="col-sm-10">
                            <input className="form-control" id="verifyPassword"
                                   placeholder="Confirm Password" type="password"
                                   onChange={this.confirmPasswordChanged}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <Link className="btn btn-primary btn-block"
                                  to='/profile'
                                  onClick={() => {
                                      createUser(this.state)
                                  }}>
                                Register
                            </Link>
                            <div className="row">
                                <div className="col-6">
                                    <Link to='/login'>Log in</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    createUser: user => dispatch(createUserAction(user))
})

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
export default Register;
