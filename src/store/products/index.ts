import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../model";
import { ProductsState } from "../types";

const initialState: ProductsState = {
    value: [],
}

export const productsSlice = createSlice({
    name: "productsState",
    initialState,
    reducers: {
        INITIALIZE_PRODUCTS: (state, action: PayloadAction<Product[]>) => {
            state.value = action.payload;
        },
        ADD_TO_PRODUCTS: (state, action: PayloadAction<Product>) => {
            const { value } = state;
            state.value = [action.payload, ...value];
        },
        UPDATE_PRODUCT_STATE: (state, action: PayloadAction<Product>) => {
            for(let i = 0; i < state.value.length; i++){
                if(state.value[i].id === action.payload.id){
                    state.value[i] = action.payload;
                    break;
                }
            }
        },
        REMOVE_PRODUCT: (state, action: PayloadAction<string>) => {
            const newState: Product[] = state.value.filter((item: Product) => item.id !== action.payload);
            state.value = [...newState];
        }
    }
})

export const { INITIALIZE_PRODUCTS, ADD_TO_PRODUCTS, UPDATE_PRODUCT_STATE, REMOVE_PRODUCT } = productsSlice.actions;

export default productsSlice.reducer;