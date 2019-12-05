import {LOG_OUT, SET_USER} from "./ActionTypes";

const defaultState = {
    user: {}
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case SET_USER:
            newState.user = action.user;
            console.log(newState.user)
            return newState;
        case LOG_OUT:
            newState.user = {};
            return newState;
        default:
            return newState;
    }
}
