import React, { useEffect, useState } from 'react'
import { MdCheck, MdDeleteForever } from 'react-icons/md';
import "./Todo.css"

export default function Todo() {
    const[inputValue,setInputValue]=useState("");
    const [task,setTask] = useState([]);
    const [dateTime,setDateTime] = useState("");

    const HandlerInputChange = (value)=>{
        setInputValue(value);
    };

    const handleOnSubmit = (event)=>{
        event.preventDefault();

        if(!inputValue) return;
        if(task.includes(inputValue)){
            setInputValue("");
            return;
        } 

        setTask((prevTask)=>[...prevTask,inputValue]);
         
        setInputValue("");

    };

    //handle delete task 
    const handleDeleteTodo = (value)=>{
     const updatedTask = task.filter((task)=>task !== value);
     setTask(updatedTask);
    };

    //handle clear all button
    const handleClearAllBtn = ()=>{
      setTask([]);
    };



    //set time and date 
    useEffect(()=>{
        const interval = setInterval(()=>{
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
             setDateTime(`${formattedDate} - ${formattedTime}`);
       
           },1000);

           return ()=> clearInterval(interval)

    },[]);
;

  return (
    <div>
        <section className='todo-container'>
        <header>
            <h1>Todo List</h1>
            <h2>Date & Time : {dateTime}</h2>
            <section className='form'>
                <form onSubmit={handleOnSubmit}>
                    <div>
<input type='text' id='todo-input' name='todo-input' className='todo-input' autoComplete='off' value={inputValue} onChange={(e)=>HandlerInputChange(e.target.value)}/>
                   </div>  
                   <div>
                    <button type='submit' className='todo-btn'>Add Task</button>
                   </div>

                </form>
            </section>
            <section className='myUnOrdList'>
                <ul>
                    {
                        task.map((curTask,index)=>{
                            return <li key={index} className='todo-item'>
                                <span>{curTask}</span>
                                <button className='check-btn'><MdCheck/></button>
                                <button className='delete-btn' onClick={()=>handleDeleteTodo(curTask)}><MdDeleteForever/></button>

                            </li>
                        
                        })
                    }
                </ul>

            </section>
            <section>
                <button type="button" className='clear-btn' onClick={handleClearAllBtn}>Clear All</button>
            </section>
        </header>
        </section>
      
    </div>
  )
}
