import { configureStore } from '@reduxjs/toolkit'
import  todoReducer  from "../feauture/todo/todoSlice.js"
export const store = configureStore({
    reducer : todoReducer,
    
})