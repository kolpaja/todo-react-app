import React, { useState } from 'react'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import "./App.css"

function App() {
    const [todos, setTodos] = useState(["Read a book", "Travel to the beach"])
    const [input, setInput] = useState("")

    const addTodo = (event => {
        event.preventDefault();

        if (input.trim() === "") {
            alert("Please type something")
        }
        else {
            setTodos([...todos, input])
            setInput("")
        }

    })
    return (
        <div className="app" >
            <h1>Hi Again! on another project</h1>

            <FormControl>
                <InputLabel>Write a Todo</InputLabel>
                <Input value={input} onChange={event => setInput(event.target.value)} />
                <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add todo</Button>
                <ul>
                    {
                        todos.map(todo => (
                            <li>{todo}</li>
                        ))
                    }
                </ul>
            </FormControl>

        </div>
    )
}

export default App