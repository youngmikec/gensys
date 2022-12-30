import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Giftcard } from "../../model";
import { GiftcardsState } from "../types";

const initialState: GiftcardsState = {
    value: [],
}

export const giftcardSlice = createSlice({
    name: "giftcardsState",
    initialState,
    reducers: {
        INITIALIZE_GIFTCARDS: (state, action: PayloadAction<Giftcard[]>) => {
            state.value = action.payload;
        },
        ADD_TO_GIFTCARDS: (state, action: PayloadAction<Giftcard>) => {
            const { value } = state;
            state.value = [action.payload, ...value];
        },
        UPDATE_GIFTCARD_STATE: (state, action: PayloadAction<Giftcard>) => {
            for(let i = 0; i < state.value.length; i++){
                if(state.value[i].id === action.payload.id){
                    state.value[i] = action.payload;
                    break;
                }
            }
        },
        REMOVE_GIFTCARD: (state, action: PayloadAction<string>) => {
            const newState: Giftcard[] = state.value.filter((item: Giftcard) => item.id !== action.payload);
            state.value = [...newState];
        }
    }
})

export const { 
    INITIALIZE_GIFTCARDS, 
    ADD_TO_GIFTCARDS, 
    UPDATE_GIFTCARD_STATE, 
    REMOVE_GIFTCARD 
} = giftcardSlice.actions;

export default giftcardSlice.reducer;