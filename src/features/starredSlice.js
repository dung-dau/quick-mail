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
        setStarredTrue: state => {
            state.selected = true
        },
        setStarredFalse: state => {
            state.selected = false
        },
    },
});

export const { toggleStarred, setStarredTrue, setStarredFalse } = starredSlice.actions;

export const selectStarred = (state) => state.starred.selected;

export default starredSlice.reducer;