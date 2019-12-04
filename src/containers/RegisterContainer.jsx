import React from 'react'
import {UserService} from "../services/UserService";
import {connect} from "react-redux";
import {setUserAction} from "../reducer/ActionCreaters";
import {Link} from "react-router-dom";

class RegisterContainer extends React.Component {
    state = {
        username: '',
        password: '',
        confirmPassword: ''
    }

    constructor(props) {
        super(props)
        this.userService = UserService.instance;
    }

    usernameChanged = (event) => this.setState({username: event.target.value})
    passwordChanged = (event) => this.setState({password: event.target.value})
    confirmPasswordChanged = (event) => this.setState({confirmPassword: event.target.value})

    register = () => {
        // this.userService.findUserByUsername(this.state.username)
        //     .then(user => {
        //         user && alert(`"${user.username}" username is already taken`)
        //         return;
        //     }, () => {
        //         if (this.state.username.length < 3) {
        //             alert('Username must be at least 3 characters')
        //             return
        //         }
        //
        //         if (this.state.password !== this.state.confirmPassword) {
        //             alert('Passwords must match')
        //             return
        //         }
        //
        //         const user = {
        //             username: this.state.username,
        //             password: this.state.password
        //         }
        //
        //         this.userService.register(user)
        //             .then(user => {
        //                 this.props.setUser(user);
        //                 this.props.history.push('/');
        //             }).catch(error => alert('Failed to Register!'))
        //     })
        const user = {
            username: this.state.username,
            password: this.state.password
        }

        this.userService.register(user)
            .then(user => {
                console.log(user);
                this.props.setUser(user);
                this.props.history.push('/');
            }).catch(error => alert('Failed to Register!'))
    }

    render() {
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
                                   value={this.state.username}
                                   onChange={this.usernameChanged}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="password">
                            Password </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="password"
                                   placeholder="Password"
                                   type="password"
                                   value={this.state.password}
                                   onChange={this.passwordChanged}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="password">
                            Verify<br/> Password </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="verifyPassword"
                                   placeholder="Confirm Password"
                                   type="password"
                                   value={this.state.confirmPassword}
                                   onChange={this.confirmPasswordChanged}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <Link className="btn btn-primary btn-block"
                                  to='/profile'
                                  onClick={this.register}>
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

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUserAction(user))
})

const Register = connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
export default Register;
