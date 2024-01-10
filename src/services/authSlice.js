import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        isAdmin: false,
    },
    reducers: {
        clearUser: (state) => {
            state.isAuthenticated = false;
            state.isAdmin = false;
        },
        setIsAuthenticated: (state) => {
            console.log('Set isAuthenticated reducer:', state);
            state.isAuthenticated = true;
            state.isAdmin = false;
        },
        setIsAdmin: (state) => {
            console.log('Set isAdmin reducer:', state);
            state.isAuthenticated = true;
            state.isAdmin = true;
        },
    },
});



export const { clearUser, setIsAdmin, setIsAuthenticated } = authSlice.actions;
export default authSlice.reducer;
