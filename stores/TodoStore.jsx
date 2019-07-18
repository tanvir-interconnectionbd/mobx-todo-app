class TodoStore {
    @observable taskList = [];

    @action addtask (task) {
        this.taskList.push(task);
    }
}

export default TodoStore;