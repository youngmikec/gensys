import { configureStore } from "@reduxjs/toolkit";
import appModalReducer from './modal';
import categoriesReducer from './categories';
import productsReducer from './products';
import usersReducer from './users';
import cryptosReducer from './cryptos';

export const store = configureStore({
    reducer: {
        appModal: appModalReducer,
        productsState: productsReducer,
        categoriesState: categoriesReducer,
        usersState: usersReducer,
        cryptosState: cryptosReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;