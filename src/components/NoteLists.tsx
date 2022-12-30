 import React from 'react'
 // импортируем весь массив с типами
import { Note } from '../models/note.model'

 interface INoteListsProps {
notes: Note[],  
setNotes: React.Dispatch<React.SetStateAction<Note[]>>,
 }
 const NoteLists:React.FC<INoteListsProps>  = ({notes,setNotes}) => {
  function handleDelete(id: string) { 
  //  оставляем все кроме текущей
    setNotes( notes.filter((note)=> {
  return note.id !== id
  }))
  }
  return (
    <>
 <div className="container">
 <h3>Мои Заметки</h3>
 {
notes.map((item)=> { 
   return (  
   <div key={item.id} className="card-wrapper" style={{background: item.color}}>
  <h2 className='note-title' >{item.title}</h2>
    <div className="note-text">{item.text}</div>
    <hr />
    <div className="note-date"><span>Дата создания:</span> {item.date}</div>
    {/* Удаляем Заметку */}
    <button onClick={()=> handleDelete(item.id)} className="note-button">Удалить</button>
  </div>
    )})  
 }
 </div>
    </>
  )
 }
 export default NoteLists
