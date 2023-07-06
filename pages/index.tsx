import { observer } from "mobx-react-lite";
import { useLocalObservable } from "mobx-react-lite";
import TaskStore from "../models/TaskStore";
import TaskForm from "../components/FormTask";

const Home = observer(() => {
  const taskStore = useLocalObservable(() => TaskStore.create({ tasks: [] }));

  const addTask = (title: string) => {
    const newTask = {
      id: Math.random().toString(),
      title,
      completed: false,
    };

    taskStore.addTask(newTask);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Task Manager</h1>
      <div className="flex mb-6">
        <div className="w-2/3">
          <TaskForm onSubmit={addTask} />
          {taskStore.tasks.length === 0 ? (
            <p className="text-gray-500">No tasks found.</p>
          ) : (
            <ul className="bg-white shadow divide-y divide-gray-200">
              {taskStore.tasks.map((task) => (
                <li
                  key={task.id}
                  className={`px-4 py-3 flex items-center justify-between ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => task.toggle()}
                      className="mr-3 h-5 w-5 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <span>{task.title}</span>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                    onClick={() => taskStore.removeTask(task)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-1/3">
          {/* Add any additional components or sidebar content here */}
        </div>
      </div>
    </div>
  );
});

export default Home;
