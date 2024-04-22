import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todoarray: []
}
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers :{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todoarray.push(todo)
        }, 
        removeTodo: (state, action) => {
            state.todoarray = state.todoarray.filter((todo) => todo.id !== action.payload )
        },
        clearAll:(state)=>{
            state.todoarray=[]
        },
        // edit:(state,action)=>{
        //     const {id}=action.payload;
        //     const eu= state.todoarray.filter((todo)=>todo.id===id)
        //     if (eu){
        //         eu.name=id
        //     }
        // }
        editToDo: (state, action) => {
            state.todoarray = state.todoarray.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.text = action.payload.text; // Corrected property name from 'value' to 'text'
                }
                return todo;
            });
        }
    }
})
export const {addTodo, removeTodo,clearAll,editToDo} = todoSlice.actions

export default todoSlice.reducer