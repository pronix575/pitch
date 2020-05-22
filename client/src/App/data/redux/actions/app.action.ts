import { TurnOnLoading, TurnOffLoading } from "../../../types";
import { TURN_ON_LOADING, TURN_OFF_LOADING } from "../types";

export const

turnOnLoading: TurnOnLoading = () => dispatch => dispatch({ type: TURN_ON_LOADING }),
turnOffLoading: TurnOffLoading = () => dispacth => dispacth({ type: TURN_OFF_LOADING })

