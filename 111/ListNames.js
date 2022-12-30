import React, { useEffect, useState } from 'react'
export default function ListNames() {
  let key = 'name'
  let initialValue = [
    {id: new Date(),
      name: 'Ann'
    }]
  function getValue() { 
   const storage =  localStorage.getItem(key)
   if(!storage) return initialValue
    else {
      return JSON.parse(storage) // Важно парсить
     }
  }
  const [userNames, userUserNames] = useState(getValue)
useEffect(() => {
    // устанавливает новое значение по ключу и значению value - обновляем массив
 // Важно  при дополнение в LS перевести в строку 
    localStorage.setItem(key, JSON.stringify(userNames));
    }, [key, userNames]);
  function handleAddStorage(e) {
   e.preventDefault();
    userUserNames((prev) => {
      // возвращем  в массив - к предыдущему добавляем новый объект
    return [...prev, {
      id: new Date(),
      name: inputValue // из поля ввода
    }];
    });
    }
// можно через useRef()
   const [inputValue, setInputValue] = useState();
   function handleDelete(id) { 
    // !!! цикл  делаем внутри  userUserNames
    userUserNames(
      userNames.filter((item)=> {
        return item.id !== id // new Date()
      })
    )
   }
  return (
 <>
    <div>ListNames</div>
    {
      // показываем все что есть в LS
      userNames.map((item, i)=> { 
       return ( 
      <div onClick={( )=> handleDelete(item.id)} key={item.id}>{item.name }</div> 
        )})  
    }
    <form onSubmit={handleAddStorage} >
  <input onChange={(e) => setInputValue(e.target.value)} type="text" />
  <button type="submit">Добавить имя </button>
</form>
<button  onClick={() => {localStorage.clear(); userUserNames("");}}>Удалить все</button>
 </>
  )
}
