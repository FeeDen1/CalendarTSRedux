import {IUser} from "../../../models/IUser";
import {EventsActionsEnum, SetEventsAction, SetGuestsAction} from "./types";
import {IEvent} from "../../../models/IEvent";
import {AppDispatch} from "../../index";
import axios from "axios";
import UserService from "../../../api/userService";
import {useAppDispatch} from "../../../hooks/useAppDispatch";


export const EventActionCreators = {
    setGuests:(guest:IUser[]):SetGuestsAction => ({type: EventsActionsEnum.SET_GUESTS, payload: guest}),
    setEvents:(event:IEvent[]):SetEventsAction => ({type: EventsActionsEnum.SET_EVENTS, payload: event}),
    fetchGuests: () => async(dispatch:AppDispatch) => {
        try {
            const guests = await UserService.getUsers()
            dispatch(EventActionCreators.setGuests(guests.data));
        } catch(e) {
            console.log(e)
        }
    }
}