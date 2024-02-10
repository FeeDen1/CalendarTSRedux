import {EventActions, EventsActionsEnum, EventState} from "./types";

const initialState : EventState = {
    events:[],
    guests:[]
}


export default function EventReducer(state=initialState, action: EventActions): EventState {
    switch (action.type) {
        case EventsActionsEnum.SET_GUESTS :
            return {...state, guests: action.payload}
        case EventsActionsEnum.SET_EVENTS:
            return {...state, events: action.payload}
        default:
            return state
    }
}