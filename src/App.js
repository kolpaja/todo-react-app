import React, { useState, useEffect } from 'react'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import "./App.css"
import Todo from "./todo"

import firebase from 'firebase'
import { db } from './firebase'

function App() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")

    //when the app loads we listen to the database and fetch new todos as they get added
    useEffect(() => {
        db.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            console.log("data: ", snapshot.docs.map(doc => doc.data())); //doc.data send an array of objects [{...}]
            setTodos(snapshot.docs.map(doc => doc.data().todo)) //we have an array of [...todo]
        })
    }, [])

    const addTodo = (event => {
        event.preventDefault();

        if (input.trim() === "") {
            alert("Please type something")
        }
        else {
            db.collection("todos").add({
                todo: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
            setInput("") //clear the input after we add todos
        }

    })
    return (
        <div className="app" >
            <h1>Add A Todo Task 📃✔</h1>

            <FormControl>
                <InputLabel>Write a Todo</InputLabel>
                {/* we get the typed value */}
                <Input value={input} onChange={event => setInput(event.target.value)} />

                <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add todo</Button>
                <ul>
                    {
                        todos.map(todo => (
                            <Todo todo={todo}>

                            </Todo>
                        ))
                    }
                </ul>
            </FormControl>

        </div>
    )
}

export default App