import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"








const initialState = {
    ticket: [],
    single: {},
    img: "",
    summary: "",
    time: "",
    language: "",
    name: "",

    pending: null,
    error: null
}

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchticket.fulfilled, (state, action) => {
            state.ticket = action.payload
            state.pending = null
            state.error = null

        }).addCase(getdescription.fulfilled, (state, action) => {
            state.single = action.payload
            state.img = action.payload.show.image.original
            state.summary = action.payload.show.summary
            state.name = action.payload.show.name
            state.time = action.payload.show.schedule.time
            state.language = action.payload.show.language


            state.pending = null
            state.error = null

        })
            .addCase(fetchticket.pending, (state, action) => {
                state.pending = true
                state.error = null

            }).addCase(fetchticket.rejected, (state, action) => {
                state.pending = null
                state.error = true

            })
            .addCase(getdescription.pending, (state, action) => {
                state.pending = true
                state.error = null

            }).addCase(getdescription.rejected, (state, action) => {
                state.pending = null
                state.error = true

            })






    },
})
export const fetchticket = createAsyncThunk(
    'ticket/fetch',
    async (thunkAPI) => {
        const response = await axios.get("https://api.tvmaze.com/search/shows?q=all")
        console.log(response.data)

        return response.data

    }
)
export const getdescription = createAsyncThunk(
    'ticket/single',
    async (thunkAPI) => {
        console.log("hiiiii")
        const response = await axios.get("https://api.tvmaze.com/search/shows?q=all")
        console.log(response.data)
        const data = response.data.find((e) => e.show.id == thunkAPI)
        if (data) {
            console.log("doneeeeee")
            return data
        }



    }
)






// Action creators are generated for each case reducer function
export const { } = ticketSlice.actions

export default ticketSlice.reducer