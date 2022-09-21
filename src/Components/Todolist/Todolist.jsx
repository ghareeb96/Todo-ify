import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
import Todo from '../Todo/Todo'
import './Todolist.scss'

const Todolist = () => {
    // creating uniqe id for each todo when initialization
    const _id = uuid().slice(0, 8)
    const initialState = { body: '', isCompleted: false, id: _id }

    // state to store all todos array
    const [todos, setTodos] = useState([])
    const [formData, setFormData] = useState(initialState)

    // handling form input change 
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // Saving todo to the todos array
    const addTodo = (e) => {
        e.preventDefault()
        setTodos([...todos, formData])
        setFormData(initialState)
    }

    // Handling complete Todo button
    const completeTodo = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted }
            }
            return todo
        }))
    }

    // Handling delete Todo button
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id
        }))
    }

    // Handling edit Todo button
    const editTodo = (id, newText) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, body: newText }
            }
            return todo
        }))
    }

    return (
        <div id='Todolist'>
            <div className="form-container">
                <form>
                    <input
                        type="text"
                        id="todo-input"
                        name='body'
                        value={formData.body}
                        onChange={handleChange} />

                    <button type="submit" onClick={addTodo}>Add</button>
                </form>
            </div>

            <h3 className="headline">Todo List</h3>
            <div className="todos-container">
                {
                    // Rendering the incompleted todos from the array
                    todos.filter(todo => todo.isCompleted === false)
                        .map((todo, index) => (
                            <Todo
                                todo={todo}
                                key={index}
                                completeTodo={completeTodo}
                                deleteTodo={deleteTodo}
                                editTodo={editTodo}
                            />
                        ))
                }

            </div>

            <h3 className="headline">Completed</h3>
            <div className="todos-container">
                {
                    // Rendering the completed todos from the array
                    todos.filter(todo => todo.isCompleted === true)
                        .map((todo, index) => (
                            <Todo
                                todo={todo}
                                key={index}
                                completeTodo={completeTodo}
                                deleteTodo={deleteTodo}
                                editTodo={editTodo}
                            />

                        ))
                }
            </div>
        </div>
    )
}

export default Todolist