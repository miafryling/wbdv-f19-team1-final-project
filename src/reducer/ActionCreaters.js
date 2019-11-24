import {CREATE_USER, FIND_ALL_ANIMALS, LOG_OUT, SET_USER, UPDATE_PROFILE} from "./ActionTypes";

export const findAllAnimalsAction = () => ({
    type: FIND_ALL_ANIMALS
})

export const setUserAction = user => ({
    type: SET_USER,
    user: user
})

export const updateProfileAction = (userId, user) => ({
    type: UPDATE_PROFILE,
    userId: userId,
    user: user
})

export const logOutAction = () => ({
    type: LOG_OUT
})

export const createUserAction = user => ({
    type: CREATE_USER,
    user: user
})

