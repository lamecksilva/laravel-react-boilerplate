const initialState = {
    isAuthenticated: false
};
export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { isAuthenticated: true, ...state };

        default:
            return state;
    }
};
