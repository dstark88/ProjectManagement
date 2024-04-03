import NewTask from "./NewTask.jsx";
import Button from "./Button.jsx";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-slate-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-2 mt-8 rounded-md bg-slate-100">
          {tasks.map((task, i) => (
            <li
              key={task.id}
              className={`${
                i !== tasks.length - 1 && "border-b-2 border-slate-200"
              }, flex justify-between my-1 items-center`}
            >
              <span>{task.text}</span>
              <Button onClick={() => onDelete(task.id)}>Remove</Button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
