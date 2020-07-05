export const login = token => ({
    type: 'LOGIN',
    authToken: token
})

export const register = member => ({
    type: 'REGISTER',
    payload: member
})