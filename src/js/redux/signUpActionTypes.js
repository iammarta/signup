export const setFirstName = firstname => ({
    type: SignUpActionTypes.SET_FIRSTNAME,
    firstname
});

export const setLastName = lastname => ({
    type: SignUpActionTypes.SET_LASTNAME,
    lastname
});


export const setEmail = email => ({
    type: SignUpActionTypes.SET_EMAIL,
    email
});


export const setPassword = password => ({
    type: SignUpActionTypes.SET_PASSWORD,
    password
});

export const setConfirmPassword = confirmpassword => ({
    type: SignUpActionTypes.SET_CONFIRMPASSWORD,
    confirmpassword
});

export const SignUpActionTypes = {
    SET_FIRSTNAME: 'SET_FIRSTNAME',
    SET_LASTNAME: 'SET_LASTNAME',
    SET_EMAIL: 'SET_EMAIL',
    SET_PASSWORD: 'SET_PASSWORD',
    SET_CONFIRMPASSWORD: 'SET_CONFIRMPASSWORD',
};