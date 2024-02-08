import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './menu/index.js'

export default configureStore({
    reducer: {
        menu: menuSlice,
    },
})
