import React, { useState } from 'react'
import './Todo.scss'
import { ReactComponent as Checkmark } from './check-mark.svg'

const Todo = ({ todo, completeTodo, editTodo, deleteTodo }) => {

    // state for the edit mode text handler
    const [todoText, setTodoText] = useState(todo.body)

    // Showing the edit modal
    const showModal = ()=>{
        document.querySelector('.modal').classList.add('show-modal')
    }

    // Saving the edited text to the todos array
    const saveEdit = (e)=>{
        e.preventDefault()
        editTodo(todo.id, todoText)
        document.querySelector('.modal').classList.remove('show-modal')

    }

    const handleEdit = (e) => {
        setTodoText(e.target.value)
    }


    return (
        <>
            <div className="modal">
                <form >
                    <input
                        type="text"
                        className="editText"
                        value={todoText}
                        onChange={handleEdit}
                        />
                    <button className="saveEdit" onClick={saveEdit}>Save</button>
                </form>
            </div>

            <div className={todo.isCompleted ? 'todo completed' : 'todo'}>
                <div className='isComplete'>
                    <div className="check"></div>
                </div>

                <div className="todo-container">
                    <button className="complete-btn" onClick={() => completeTodo(todo.id)}>
                        <Checkmark className='icon'/>
                    </button>
                    <h3>{todo.body}</h3>
                    <div className="btns-container">
                        <button className="edit-modal" onClick={showModal}>Edit</button>
                        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Todo