export const login = token => ({
    type: 'LOGIN',
    authToken: token
})

export const logout = () => ({
    type: 'LOGOUT'
})