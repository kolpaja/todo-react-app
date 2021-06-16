import React from 'react'

import { db } from "./firebase"
import { ListItem, List, ListItemText, Button } from '@material-ui/core'

function Todo(props) {
    const deleteTodo = (event) => {
        console.log("delete fnx: ", props.todo.id)
        db.collection("todos").doc(props.todo.id).delete()
    }
    return (
        <List>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary={"dummy deadline ⏰"} />
                <Button onClick={deleteTodo}>❌ Delete</Button>
            </ListItem>
        </List>

    )
}

export default Todo

