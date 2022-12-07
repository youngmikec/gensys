import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../../model";
import { CategoriesState } from "../types";

const initialState: CategoriesState = {
    value: [],
}

export const categoriesSlice = createSlice({
    name: "categoriesState",
    initialState,
    reducers: {
        INITIALIZE_CATEGORIES: (state, action: PayloadAction<Category[]>) => {
            state.value = action.payload;
        },
        ADD_TO_CATEGORIES: (state, action: PayloadAction<Category>) => {
            const { value } = state;
            state.value = [action.payload, ...value];
        },
        UPDATE_CATEGORY_STATE: (state, action: PayloadAction<Category>) => {
            for(let i = 0; i < state.value.length; i++){
                if(state.value[i].id === action.payload.id){
                    state.value[i] = action.payload;
                    break;
                }
            }
        },
        REMOVE_CATEGORY: (state, action: PayloadAction<string>) => {
            const newState: Category[] = state.value.filter((item: Category) => item.id !== action.payload);
            state.value = [...newState];
        }
    }
})

export const { INITIALIZE_CATEGORIES, ADD_TO_CATEGORIES, UPDATE_CATEGORY_STATE, REMOVE_CATEGORY } = categoriesSlice.actions;

export default categoriesSlice.reducer;