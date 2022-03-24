import { formatDistance } from "date-fns"
import { motion } from "framer-motion"

export default function ListItems({todoList, deleteTodo, setTodoList}){

    const handleMarkTodo = (todoItem) => {
        const newTodoList = todoList.map((todo) => {

            if (todo === todoItem) {
                todo.complete = true
            }
            return todo
        })
        localStorage.setItem('todoList', JSON.stringify(newTodoList))
        setTodoList(newTodoList)
    }

    return (
        <div className="h-96 flex flex-col">
            {
                todoList.map((todoItem)=>{
                    return <motion.div 
                            key={todoItem.id}
                            className="h-12 border-b items-center inline-flex my-4"
                            layout
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1,
                            }}
                        >
                            <div className="w-4/6 items-center flex">
                                <div className={`${todoItem.complete && 'bg-green-500 w-full'}`} >
                                    <p className="text-xl">
                                        {
                                            todoItem.todo
                                        }
                                    </p>
                                    <p className="text-[.6rem]">
                                        {
                                            formatDistance( todoItem.timeAdded, new Date(), {addSuffix:true})
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="w-2/6 flex justify-center h-full items-center">
                                <button 
                                    className="bg-primary h-5/6 w-[2.5rem] mx-1 rounded flex justify-center items-center text-slate-300"
                                    onClick={()=>handleMarkTodo(todoItem)}
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
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </button>
                                <button 
                                    className="bg-red-500 text-slate-300 h-5/6 mx-1 w-[2.5rem] rounded flex justify-center items-center"
                                    onClick={()=>deleteTodo(todoItem.id)}
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
                                            d="M6 18L18 6M6 6l12 12" 
                                        />
                                    </svg>
                                </button>
                        </div>
                    </motion.div>
                })
            }
        </div>
    )
}