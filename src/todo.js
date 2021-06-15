import React from 'react'
import { ListItem, List, ListItemText } from '@material-ui/core'

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemText primary={props.todo} secondary={"dummy deadline ⏰"} />
            </ListItem>
        </List>

    )
}

export default Todo

