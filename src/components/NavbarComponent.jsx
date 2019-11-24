import React from 'react'
import {UserService} from "../services/UserService";
import {Link} from "react-router-dom";
import {logOutAction} from "../reducer/ActionCreaters";
import {connect} from "react-redux";

class NavbarComponent extends React.Component {
    constructor(props) {
        super(props)
        this.userService = UserService.instance;
        this.user = {
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: ''
        }
    }

    render() {
        const {user, logOut} = this.props;
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <Link className="navbar-brand" to='/'>
                    <img
                        src="data:image/png;base64,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"
                        alt="logo"
                        style={{width: 80}}/>
                </Link>
                {/*DON'T FORGET CHANGE this.user->user*/}
                {!this.user.username &&
                <div className="form-inline my-lg-0">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/register" className="btn btn-outline-info mr-md-2 mb-2 mb-md-0">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="btn btn-outline-info mr-md-2 mb-2 mb-md-0">Login</Link>
                        </li>
                    </ul>
                </div>
                }
                {this.user.username &&
                <div className="form-inline my-lg-0">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/profile" className="btn btn-outline-info mr-md-2 mb-2 mb-md-0">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={logOut}
                                    className="btn btn-outline-danger mr-md-2 mb-2 mb-md-0">Logout
                            </button>
                        </li>
                    </ul>
                </div>
                }
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOutAction())

})

const CunstomerNavBar = connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)
export default CunstomerNavBar;



