import TodoBtns from "./todoBtns";
import { useMemo, useState } from "react";

 function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<string[]>(["React", "Vue", "Angular"]);

  const trimmed = useMemo(() => newTodo.trim(), [newTodo]);

  const addTodo = () => {
    if (!trimmed) return;
    setTodos((prev) => [trimmed, ...prev]);
    setNewTodo("");
  };

  const deleteTodo = () => {
    setTodos((prev) => prev.slice(1));
  };

  return (
    <div className="min-h-[calc(100vh-2rem)] bg-gradient-to-b from-slate-50 to-white p-4 sm:p-8">
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              Todo List
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Add tasks and keep track of what you need to do.
            </p>
          </div>
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700">
            {todos.length} items
          </span>
        </div>

        <div className="mt-5 space-y-3">
          <TodoBtns
            value={newTodo}
            onChange={setNewTodo}
            onAdd={addTodo}
            onDelete={deleteTodo}
            addDisabled={!trimmed}
            deleteDisabled={todos.length === 0}
          />
        </div>

        <div className="mt-6">
          <h2 className="text-sm font-semibold text-slate-900">Items</h2>
          <ul className="mt-3 space-y-2">
            {todos.map((item) => (
              <li
                key={item}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  {item}
                </span>
                <span className="text-xs text-slate-500">Pending</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo