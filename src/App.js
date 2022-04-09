
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './utilies/Header';
import Footer from './utilies/Footer';
import Home from './Component/Home';
import ShowNotes from './Component/ShowNotes';
import { useState } from 'react';


function App() {
  const [notesItem,SetNotesItem] = useState([]);
  const addNotes = (data)=>{
    SetNotesItem((prevState)=>{
      return [...prevState, data]
    })
  }
  // console.log(notesItem)
  const onDelete = (id)=>{
    console.log(id)
    SetNotesItem((prevData)=>
      prevData.filter((currentData, index)=>{
        return index !== id
      })
    )
    
  }
  return (
    <div className="App">
    
      <Header></Header>
        <Home passNote ={addNotes}></Home>    
        
        { notesItem.map((data, index)=>{
          return <ShowNotes title={data.title} key={index} notes={data.notes} id={index} deleteItem={onDelete}></ShowNotes>
        })}
        <Footer></Footer>
      
    </div>
  );
}

export default App;
