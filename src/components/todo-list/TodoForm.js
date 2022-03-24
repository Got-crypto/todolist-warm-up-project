import { useState } from "react"

export default function TodoForm({formItem, setFormItem, handleAddTodo}){


    return (
        <div className="h-12 flex justify-between items-center">
            <input
                className="h-5/6 w-4/6 outline-primary p-1 text-sm font-bold rounded placeholder:text-base placeholder:font-normal"
                placeholder="start typing to add an item or search ..." 
                value={formItem}
                onChange={({target})=>setFormItem(target.value)}
            />
            <div className="w-2/6 flex justify-center h-full items-center">
                <button 
                    className="bg-primary h-5/6 w-[2.5rem] mx-1 rounded flex justify-center items-center text-slate-300"
                    onClick={handleAddTodo}
                >
                    <svg 
                        className="w-6 h-6"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                        />
                    </svg>
                </button>
                <button className="bg-red-500 h-5/6 mx-1 w-[2.5rem] rounded flex justify-center items-center text-slate-300">
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}