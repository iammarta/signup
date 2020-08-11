export const setEmail = email => ({
    type: SignInActionTypes.SET_EMAIL,
    email
});

export const setPassword = password => ({
    type: SignInActionTypes.SET_PASSWORD,
    password
});

export const SignInActionTypes = {
    SET_EMAIL: 'SET_EMAIL',
    SET_PASSWORD: 'SET_PASSWORD'
};