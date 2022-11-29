import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from './categories';
import productsReducer from './products';
import usersReducer from './users';

export const store = configureStore({
    reducer: {
        productsState: productsReducer,
        categoriesState: categoriesReducer,
        usersState: usersReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;