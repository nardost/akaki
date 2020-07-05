import _ from 'lodash';

const registrationReducer = (state = {}, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                isRegistered: true,
                member: _.pick(action.payload, ['name', 'email', 'phone', 'country']),
            }
        default:
            return {
                ...state,
                isRegistered: false,
            }
    }
}

export default registrationReducer;