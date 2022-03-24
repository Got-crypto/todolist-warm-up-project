export default function PromptScreen({prompt, setPrompt, setTodoList}){
    return(
        <div className={`fixed top-0 left-0 h-screen w-full bg-black bg-opacity-20 ${prompt ? 'flex justify-center' : 'hidden'}`}>
            <div className="h-56 rounded w-3/6 bg-slate-300 mt-20 flex flex-col justify-center items-center">
                <p className="text-2xl py-4">
                    Confirm to erase your entire todolist
                </p>
                <div className="inline-flex py-4 w-28 justify-between items-center">
                    <button 
                        className="bg-red-500 text-slate-300 h-8 w-8 flex justify-center items-center"
                        onClick={()=>{
                            setTodoList([])
                            setPrompt(false)
                        }}
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
                        className="bg-primary text-slate-300 h-8 w-8 flex justify-center items-center"
                        onClick={()=>setPrompt(false)}
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
            </div>
        </div>
    )
}