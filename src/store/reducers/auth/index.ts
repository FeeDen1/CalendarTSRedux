import {AuthAction, AuthActionEnum, AuthState} from "./types";
import {IUser} from "../../../models/IUser";

const initalState:AuthState = {
    isAuth: false,
    user: {} as IUser,
    error: '',
    isLoading: false
}

export default function authReducer(state = initalState,action:AuthAction):AuthState {
    switch(action.type) {
        case AuthActionEnum.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading:false}
        case AuthActionEnum.SET_ERROR:
            return {...state, error: action.payload, isLoading:false}
        case AuthActionEnum.SET_ISLOADING:
            return {...state, isLoading: action.payload}
        case AuthActionEnum.SET_USER:
            return {...state, user: action.payload}
        default:
            return state
    }
}