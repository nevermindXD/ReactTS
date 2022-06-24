import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface NotesState {
    values: string[];
}

const initialState: NotesState = {
    values: []
}


export const noteSlice = createSlice({
    name: 'note',
    initialState, 
    reducers:{
        addNote: (state, action: PayloadAction<string>) => {
            state.values = [...state.values, ...action.payload]
        }
    }
})

export const { addNote } = noteSlice.actions;

export const selectedNotes = (state: RootState) => state.notes.values;
export default noteSlice.reducer;