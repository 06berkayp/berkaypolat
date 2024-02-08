import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    menu: false,
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        _toggleMenu: (state) => {
            state.menu = !state.menu
        },
        _setMenu: (state, action) => {
            state.menu = action.payload
        },
    },
})

export const { _toggleMenu, _setMenu } = menuSlice.actions
export default menuSlice.reducer
