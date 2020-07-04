const sessionReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('authToken', action.authToken)
            return {
                authToken: action.authToken,
                isAuthenticated: true,
                ...state,
            }
        case 'LOGOUT':
            return {
                authToken: null,
                isAuthenticated: false
            }
        default:
            return state
    }
}

export default sessionReducer