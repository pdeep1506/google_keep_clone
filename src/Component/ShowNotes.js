import React from 'react'
import { Button } from '@mantine/core';
  
const ShowNotes = (props) => {
    const deleteNote = ()=>{
        props.deleteItem(props.id);
        console.log(props.id, 'id')
    }
  return (
    <div className='note'>
        <h1>{props.title}</h1>
        <br></br>
        <p>{props.notes}</p>
        <Button color="yellow" radius="lg" onClick={deleteNote} >Delete</Button>
    </div>
  )
}

export default ShowNotes