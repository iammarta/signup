import Immutable from 'immutable';
import CreateSignInDTO from "./signInDTO";
import {SignInActionTypes} from "./signInActionTypes";

const defaultState = Immutable.OrderedMap({
    userData: new CreateSignInDTO()
});

const signInReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SignInActionTypes.SET_EMAIL:
            return state.setIn(['userData', 'email'], action.email);

        case SignInActionTypes.SET_PASSWORD:
            return state.setIn(['userData', 'password'], action.password);

        default:
            return state;
    }
};

export default signInReducer;