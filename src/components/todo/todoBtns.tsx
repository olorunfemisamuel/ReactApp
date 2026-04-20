type TodoBtnsProps = {
  value: string;
  onChange: (next: string) => void;
  onAdd: () => void;
  onDelete: () => void;
  addDisabled?: boolean;
  deleteDisabled?: boolean;
};

const TodoBtns = ({
  value,
  onChange,
  onAdd,
  onDelete,
  addDisabled,
  deleteDisabled,
}: TodoBtnsProps) => {
  return (
    <>
           <div className="mt-4 flex gap-2">
          <input
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            placeholder="Add a task..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !addDisabled) onAdd();
            }}
          />
          <button
            type="button"
            disabled={addDisabled}
            onClick={onAdd}
            className="rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Add Task
          </button>
          <button
            type="button"
            disabled={deleteDisabled}
            onClick={onDelete}
            className="rounded-md border border-slate-300 bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Delete Task
          </button>
        </div>
    </>
  )
}

export default TodoBtns
