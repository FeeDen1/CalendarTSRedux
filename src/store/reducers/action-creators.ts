import {AuthActionCreators} from "./auth/action-creators";
import {EventActionCreators} from "./events/action-creators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreators
}