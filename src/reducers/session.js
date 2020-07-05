const sessionReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('authToken', action.authToken)
            return {
                authToken: action.authToken,
                isAuthenticated: true,
                ...state,
            }
        default:
            return state
    }
}

export default sessionReducer