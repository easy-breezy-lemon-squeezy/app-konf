import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    places: [
        {
            "city": "New York",
            "population": "8,175,133",
            "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/240px-Above_Gotham.jpg",
            "state": "New York",
            "latitude": 40.6643,
            "longitude": -73.9385
        },
        {
            "city": "Los Angeles",
            "population": "3,792,621",
            "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/5/57/LA_Skyline_Mountains2.jpg/240px-LA_Skyline_Mountains2.jpg",
            "state": "California",
            "latitude": 34.0194,
            "longitude": -118.4108
        },
        {
            "city": "Chicago",
            "population": "2,695,598",
            "image": "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",
            "state": "Illinois",
            "latitude": 41.8376,
            "longitude": -87.6818
        }
    ]
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        add: (state, action) => {
            state.places = state.places.add(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { add } = counterSlice.actions

export default counterSlice.reducer