import { createSlice } from '@reduxjs/toolkit';

export const starredSlice = createSlice({
    name: 'starred',
    initialState: {
        selected: false,
    },
    reducers: {
        toggleStarred: state => {
            state.selected = !state.selected;
        },
    },
});

export const { toggleStarred } = starredSlice.actions;

export const selectStarred = (state) => state.starred.selected;

export default starredSlice.reducer;