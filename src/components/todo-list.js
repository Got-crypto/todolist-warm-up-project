import { useEffect, useState } from "react";
import PromptScreen from "./prompt-screen";
import ListItems from "./todo-list/listItems";
import TodoForm from "./todo-list/TodoForm";

export default function TodoList(){

    const [formItem, setFormItem] = useState("")
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : [] )
    const [prompt, setPrompt] = useState(false)
    const [promptMessage, setPromptMessage] = useState(null)

    const handleAddTodo = ()=>{
        if( searchResults.length === 0 ){
            const newTodoList = [
                ...todoList,
                {
                    todo: formItem,
                    complete: false,
                    timeAdded: Date.now(),
                    id: Math.floor(Math.random() * (80000 * 800000) )
                },
            ]
            newTodoList.sort( (a, b) => b.timeAdded - a.timeAdded )
    
            setTodoList(newTodoList)
            localStorage.setItem('todoList', JSON.stringify(newTodoList))
            return setFormItem("")
        }

        setPromptMessage({
            message: `The todo '${formItem}' is already added to the list`,
            isValidation: true
        })
        setPrompt(true)
    }
    
    const clearTodoList = ()=>{
        setPrompt(true)
        setPromptMessage({
            message: "Confirm to clear your entire TodoList",
            isValidation: false
        })
    }

    const deleteTodo = (todo) => {
        const newTodoList = todoList.filter( thisTodo => thisTodo.id !== todo )
        
        localStorage.setItem('todoList', JSON.stringify(newTodoList))
        setTodoList(newTodoList)
    }
    const [searchResults, setSearchResults] = useState([])
    console.log('searchResults', searchResults)
    useEffect(()=>{
        if( formItem !== "" ){
            const newTodoList = todoList.filter( ({todo}) => todo.toLowerCase().includes(formItem.toLowerCase()) )
            return setSearchResults(newTodoList)
        }
        setSearchResults([])
    }, [formItem, todoList])

    return (
        <div className="w-[30rem] h-auto">
            <TodoForm 
                formItem ={formItem}
                setFormItem={setFormItem}
                handleAddTodo={handleAddTodo}
                clearTodoList={clearTodoList}
                todoListItems={todoList.length}
            />
            <ListItems todoList={todoList} searchResults={searchResults} deleteTodo={deleteTodo} setTodoList={setTodoList}/>
            <PromptScreen setPrompt={setPrompt} prompt={prompt} setTodoList={setTodoList} promptMessage={promptMessage} setPromptMessage={setPromptMessage} />
        </div>
    )
}