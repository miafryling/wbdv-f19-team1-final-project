import React from 'react'
import {UserService} from "../services/UserService";
import {updateProfileAction} from "../reducer/ActionCreaters";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class ProfileContainer extends React.Component {

    constructor(props) {
        super(props)
        this.userService = UserService.instance;
        // this.userId = this.props.user.id;
        //only to store typed user info change
        this.state = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: ''
        };
        // temp user - for demo
        this.user = {
            id: 20191124,
            username: 'anonymous',
            password: 'anonymous',
            firstName: 'abc',
            lastName: 'def',
            email: 'anonymous@gmail.com'
        }
    }

    passwordChanged = event => this.setState({password: event.target.value})
    firstNameChanged = event => this.setState({firstName: event.target.value})
    lastNameChanged = event => this.setState({lastName: event.target.value})
    emailChanged = event => this.setState({email: event.target.value})

    // DON'T FORGET TO use userReducer-Logout later
    logout = () => {
        this.userService.logout().then(() => alert("Log Out Successfully!")).catch(error => alert(error))
    }

    render() {
        const {user, updateProfile} = this.props;
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
                                   value={this.user.username}
                                   readOnly="readonly"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="passwordFld">
                            Password </label>
                        <div className="col-sm-10">
                            <input className="form-control wbdv-field wbdv-password"
                                   id="passwordFld"
                                   value={this.user.password}
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
                                   value={this.user.firstName}
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
                                   value={this.user.lastName}
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
                                   value={this.user.email}
                                   onChange={this.emailChanged}
                                   placeholder="email"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <button className="btn btn-success btn-block"
                                    onClick={() => {
                                        updateProfile(this.user.id, this.state);
                                        alert("Update Profile Successfully!")
                                    }}>
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
    updateProfile: (userId, user) => dispatch(updateProfileAction(userId, user))
})

const Profile = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
export default Profile;
