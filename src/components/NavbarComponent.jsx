import React from 'react'
import {UserService} from "../services/UserService";
import {Link} from "react-router-dom";
import {logOutAction, setUserAction} from "../reducer/ActionCreaters";
import {connect} from "react-redux";
import {Collapse, Navbar, NavbarToggler} from 'reactstrap'

class NavbarComponent extends React.Component {
    state = {
        isOpen: false,
    };

    constructor(props) {
        super(props)
        this.userService = UserService.instance;
    }

    logOut = () => {
        this.userService.logOut()
            .then(() => {
                this.props.logOut();
                this.props.history.push('/login');
            }, () => alert('Failed to Log Out!'))
    }

    openNavButton = () => this.setState({isOpen: !this.state.isOpen})

    render() {
        const {user, logOut} = this.props;
        return (
            <Navbar className='mb-3' color="dark" dark expand="md">
                <Link to="/" className="navbar-brand">Adoptable</Link>
                <NavbarToggler onClick={this.openNavButton}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <ul className="navbar-nav mr-auto">
                        {user.username &&
                        <li className='nav-item'>
                            <div className='nav-link font-weight-light mb-2 mb-md-0 text-white-50'>User
                                - {user.username}</div>
                        </li>
                        }
                    </ul>
                    {!user.username &&
                    <div className="form-inline my-lg-0">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/register"
                                      className="btn btn-outline-info mr-md-2 mb-2 mb-md-0">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="btn btn-outline-info mr-md-2 mb-2 mb-md-0">Login</Link>
                            </li>
                        </ul>
                    </div>
                    }
                    {user.username &&
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
                </Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOutAction()),
    setUser: user => dispatch(setUserAction(user))

})

const CunstomerNavBar = connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)
export default CunstomerNavBar;



