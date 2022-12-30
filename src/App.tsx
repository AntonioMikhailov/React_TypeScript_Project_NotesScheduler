import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { Note } from './models/note.model';
import './App.scss'
import NoteLists from './components/NoteLists';
import CreateNotes from './components/CreateNotes';

function App() {
  // для сохранения Заметок после перезагрузки страницы будем хранить их в LocalStorage  - весь State будет браться от туда и добавляться  в LS при кажом действии
  let key = 'notes'
  let initialValue = [
    {
      // id: (new Date()).toString(), // можно так
      id: 1,
      title: "Встретиться с коллегами",
      text: "Обсудить новый проект, с участием заказчика + руководителя",
      color: "#ddfeff",
      date: 'среда, 21 июня 2022 г., 19:49:34', //  
    },  
  ]
  function getValue() { 
    const storage =  localStorage.getItem(key)
    if(!storage) return initialValue
     else {
       return JSON.parse(storage)  
      }
   }
 // создаем state с  первичными начальными значением - функция getValue которая будет проверять наличие данных в LS и возвращать или первичное значение или массив Заметок
const [notes, setNotes] = useState<Note[]>(getValue)
 useEffect(() => {
  // устанавливает новое значение- обновляем массив
 localStorage.setItem(key, JSON.stringify(notes));
  }, [key, notes]);
  return (
    <div className="App">
   <Header/>
   <NoteLists notes={notes} setNotes={setNotes}/>
  <CreateNotes notes={notes} setNotes={setNotes}/>
   </div>
  );
}
export default App;
