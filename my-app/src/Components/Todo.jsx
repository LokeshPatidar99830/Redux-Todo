import React, { useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addTodo,removeTodo,clearAll,editToDo} from '../Features/TodoSlice' 
import './Todo.css'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const [editToDoObj, setEditTodoObj] = useState({});
    const [isEdit, setIsEdit] = useState(false);



    const addTodoHandler = (e) => {
      if(input===""){
        alert("enter some value")
      }
      else{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
      }
    }

    const editHandler = (value) => {
      setEditTodoObj(value);
      setInput(value.text);
      setIsEdit(true);
  };

  const saveBtn = () => {
      if (input === "") {
          return;
      }
      dispatch(editToDo({ id: editToDoObj.id, text: input }));
      setInput('');
      setIsEdit(false);
  };

    // const handelupdate =(e)=>{
    //   e.preventDefault()
    //   dispatch(edit({
    //     input:input,
    //   }))
      // setInput('')
    // }
   
    const todo = useSelector(state =>state.todoarray)
     return(
  <body>
    <div className='main' >
      <h1><u>Todo-List </u></h1>
      <input 
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />{' '}
      {/* <button type="submit" onClick={addTodoHandler} > Add Todo </button>  */}
      <button onClick={isEdit ? saveBtn : addTodoHandler}>{isEdit ? "Save" : "Add"}</button>
 
      <button onClick={()=>dispatch(clearAll())} >Clear All</button> 
      
      <ul>
        {todo.map((todo) => (
          <li key={todo.id} >
           {todo.text}
           {" "} <button onClick={() => dispatch(removeTodo(todo.id))}>            
            Delete
            </button>
            <button onClick={() => editHandler(todo)}>Edit</button>


            {' '} 
          </li>
        ))}
      </ul>
    </div>
    </body>
  )
}

export default AddTodo