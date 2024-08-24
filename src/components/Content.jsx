import React, { useState } from 'react'
import Container from './Container'
import TodoItem from './TodoItem'
import { v4 as uuidv4 } from "uuid";

const Content = () => {

    const [todoData, setTodoData] = useState([
        {
            id : 1,
            complate : false,
            title : "Lorem ipsum dolor sit amet consectetur.",
            date : "24-08-2024"
        },
        {
            id : 2,
            complate : false,
            title : "Lorem ipsum dolor sit amet consectetur.",
            date : "24-08-2024"
        },
        {
            id : 3,
            complate : false,
            title : "Lorem ipsum dolor sit amet consectetur.",
            date : "24-08-2024"
        }
    ])

    const [taskValue, setTaskValue] = useState("")
    
    function addTodo(value) {
        const date = new Date()

        if(value.trim().length>0) {
            const newTodo = {
                id : uuidv4(),
                complate : false,
                title : value,
                data : `${date.toLocaleDateString().replaceAll("/","-")}`
            }
            setTodoData(prev => [...prev, newTodo])
            setTaskValue("")
        }
    }



    return (
        <div className='z-[1] relative mt-[10px]'>
            <Container>
                <div className='flex flex-col gap-4 text-black'>
                    <div className='relative'>
                        <input value={taskValue} onChange={(e) => setTaskValue(e.target.value)} className='w-full py-[7px] px-[10px] dark:text-white bg-white dark:bg-slate-800 dark:border-gray-900 border-[1px] rounded-sm outline-none' type="text" placeholder='Create a new todo'/>
                        <div className='absolute top-0 right-0 bottom-0 p-[3px]'>
                            <button onClick={() => addTodo(taskValue)} className='h-full px-[10px] rounded-sm bg-gray-100 dark:bg-slate-600 dark:text-white hover:bg-black hover:bg-opacity-10 active:scale-95'>
                                + Add task
                            </button>
                        </div>
                    </div>

                    <div className='shadow-md rounded-sm overflow-hidden'>
                        {todoData.map(item => (
                            <TodoItem item={item} key={item.id} setTodoData={setTodoData}/>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Content
