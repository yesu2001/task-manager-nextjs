import { types } from "mobx-state-tree";
import Task from "./Task";

const TaskStore = types
  .model("TaskStore", {
    tasks: types.array(Task),
  })
  .actions((self) => ({
    addTask(task: typeof Task.Type) {
      self.tasks.push(task);
    },
  }));

export default TaskStore;
