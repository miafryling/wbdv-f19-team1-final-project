import React from 'react'
import {UserService} from "../services/UserService";
import {logOutAction, setUserAction} from "../reducer/ActionCreaters";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class ProfileContainer extends React.Component {

    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    };

    constructor(props) {
        super(props);
        this.userService = UserService.instance;
    }

    passwordChanged = event => this.setState({password: event.target.value})
    firstNameChanged = event => this.setState({firstName: event.target.value})
    lastNameChanged = event => this.setState({lastName: event.target.value})
    emailChanged = event => this.setState({email: event.target.value})

    logout = () => {
        this.userService.logOut()
            .then(() => {
                this.props.logOut();
                this.props.history.push('/login');
            }).catch(error => alert('Failed to Log Out!'))
    };

    updateUser = () => {
        this.userService.updateUser(this.props.user._id, this.state)
            .then(newUser => {
                this.props.setUser(newUser);
                alert("Update Profile Successfully!");
            })
    };

    render() {
        const {user} = this.props;
        return (
            <div className="container">
                <h1>Profile</h1>
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="usernameFld">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="usernameFld"
                                   placeholder="username"
                                   value={user.username}
                                   readOnly="readonly"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="passwordFld">
                            Password </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-password"
                                   id="passwordFld"
                                   value={user.password}
                                   onChange={this.passwordChanged}
                                   placeholder="password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="firstNameFld">
                            First Name </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="firstNameFld"
                                   value={user.firstName}
                                   onChange={this.firstNameChanged}
                                   placeholder="First Name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="lastNameFld">
                            Last Name </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="lastNameFld"
                                   value={user.lastName}
                                   onChange={this.lastNameChanged}
                                   placeholder="First Name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="emailFld">
                            Email </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="emailFld"
                                   value={user.email}
                                   onChange={this.emailChanged}
                                   placeholder="email"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <button className="btn btn-success btn-block"
                                    onClick={this.updateUser}>
                                Update
                            </button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <Link className="btn btn-danger btn-block" to='/' onClick={this.logout}>Logout</Link>
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
    logOut: () => dispatch(logOutAction()),
    setUser: user => dispatch(setUserAction(user))
})

const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
export default Profile;