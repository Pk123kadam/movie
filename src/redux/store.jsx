import { configureStore } from '@reduxjs/toolkit'
import ticketSlice from './show'

export const store = configureStore({
    reducer: {
        ticket: ticketSlice

    },
})

