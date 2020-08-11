import Immutable from 'immutable';

const CreateSignUpDTO = Immutable.Record({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword:''
});

export default CreateSignUpDTO;