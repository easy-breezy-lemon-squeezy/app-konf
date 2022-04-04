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
            "image": "http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/2008-06-10_3000x1000_chicago_skyline.jpg/240px-2008-06-10_3000x1000_chicago_skyline.jpg",
            "state": "Illinois",
            "latitude": 41.8376,
            "longitude": -87.6818
        }
    ]

}

export const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        add: (state, action) => {
            state.places = state.places.add(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { add } = mapSlice.actions

export default mapSlice.reducer