import { BiCircle } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import React from 'react'

const TodoItem = ({ item, setTodoData }) => {
    return (
        <div className='w-full py-[10px] px-[15px] last:border-none border-b-[1px] bg-white dark:bg-slate-800 dark:border-b-slate-500 dark:text-white flex justify-between items-center gap-1'>
            <div className="flex justify-start items-center gap-3">
                <div onClick={() => setTodoData(prev => {
                    return prev.map(prevItem => {
                        if (prevItem.id === item.id) {
                            return {
                                ...prevItem,
                                complate: prevItem.complate? false : true
                            }
                        }
                        return prevItem
                    })
                })} className="text-green-600 dark:text-green-400 text-[24px] cursor-pointer">
                    {item.complate ? <FiCheckCircle /> : <BiCircle />}
                </div>
                <div>
                    {item.title}
                </div>
            </div>
            <div onClick={() => setTodoData(prev => prev.filter(prevItem => prevItem.id !== item.id))} className="w-[30px] h-[30px] flex justify-center items-center bg-gray-100 dark:bg-slate-700 hover:bg-black hover:bg-opacity-15 cursor-pointer active:scale-95">
                <CgClose />
            </div>
        </div>
    )
}

export default TodoItem
