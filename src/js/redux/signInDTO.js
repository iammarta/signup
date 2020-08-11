import Immutable from 'immutable';

const CreateSignInDTO = Immutable.Record({
    email: '',
    password: ''
});

export default CreateSignInDTO;