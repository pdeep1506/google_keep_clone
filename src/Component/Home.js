import React, { useState } from 'react'
import { Button } from '@mantine/core';


const Home = (props) => {
    const [userNotes, SetUserNotes] = useState({
        title:'', notes:''
    })

    const userInput = (event)=>{
        // console.log(event.target.name, event.target.value)
        SetUserNotes((prevState)=>{
            return {...prevState, [event.target.name]: event.target.value}
        })
    }
    const onSubmitHandler = (event)=>{
        event.preventDefault();
        props.passNote(userNotes)
        SetUserNotes({
            title: '', notes:''
        })
        // console.log(userNotes)
    }
  return (
    <div className='main_note'>
        <form onSubmit={onSubmitHandler}>
            <input type='text' name='title' value={userNotes.title} required placeholder='Title' onChange={(event)=> userInput(event)}></input>
            <textarea type='text' name='notes' required value={userNotes.notes} placeholder='Write a Notes...' onChange={(event)=> userInput(event)} rows='' columns=''></textarea>    
            <Button variant="light" color="yellow" radius="lg" size='xs' type='submit'>Add</Button>

        </form>
       
    </div>
  )
}

export default Home