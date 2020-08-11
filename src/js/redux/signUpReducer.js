import Immutable from 'immutable';
import CreateSignUpDTO from "./signUpDTO";
import {SignUpActionTypes} from "./signUpActionTypes";

const defaultState = Immutable.OrderedMap({
    userData: new CreateSignUpDTO()
});

const signUpReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SignUpActionTypes.SET_FIRSTNAME:
            return state.setIn(['userData', 'firstname'], action.firstname);

        case SignUpActionTypes.SET_LASTNAME:
            return state.setIn(['userData', 'lastname'], action.lastname);

        case SignUpActionTypes.SET_EMAIL:
            return state.setIn(['userData', 'email'], action.email);

        case SignUpActionTypes.SET_PASSWORD:
            return state.setIn(['userData', 'password'], action.password);

        case SignUpActionTypes.SET_CONFIRMPASSWORD:
            return state.setIn(['userData', 'confirmpassword'], action.confirmpassword);

        default:
            return state;
    }
};

export default signUpReducer;