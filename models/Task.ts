import { types } from "mobx-state-tree";

const Task = types
  .model("Task", {
    id: types.identifier,
    title: types.string,
    completed: types.boolean,
  })
  .actions((self) => ({
    toggle() {
      self.completed = !self.completed;
    },
  }));

export default Task;
