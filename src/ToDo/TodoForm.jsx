import React from 'react'

export default function TodoForm() {

 const[inputValue,setInputValue]=useState("");
  
  const HandlerInputChange = (value)=>{
        setInputValue(value);
    };
    return (
    <>
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
    </>
  )
}
