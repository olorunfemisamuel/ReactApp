import TodoBtns from "./todoBtns"


const listItems = ["React", "Vue", "Angular"]

const Todo = () => {
    return (
        <>
        <div className="mx-auto max-w-md p-6">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Todo List</h1>
        <TodoBtns />

        
     
 
        <ul className="mt-5 divide-y divide-slate-200 rounded-md border border-slate-200 bg-white">
          {listItems.map((item) => (
          <li key={item} className="px-4 py-3 text-slate-800">
            {item}
          </li>
           ))}
        </ul>
        
      </div>

        </>

    )
}


export default Todo