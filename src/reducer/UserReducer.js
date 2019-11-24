import {CREATE_USER, LOG_OUT, SET_USER, UPDATE_PROFILE} from "./ActionTypes";
import {UserService} from "../services/UserService";

const defaultState = {
    user: {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    }
}

const userService = UserService.instance;

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case SET_USER:
            newState.user = action.user;
            return newState;
        case UPDATE_PROFILE:
            userService.updateProfile(action.userId, action.user).then(newUser => newState.user = newUser);
            return newState;
        case LOG_OUT:
            userService.logout()
                .then(() => newState.user = {})
                .then(() => alert("Log Out Successfully!"))
                .catch(error => alert(error));
            return newState;
        case CREATE_USER:
            userService.createUser(action.user).then(user => newState.user = user).catch(error => alert(error));
            return newState;
    }
}
