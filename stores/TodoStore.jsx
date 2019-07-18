import {observable, action, computed} from 'mobx'
class TodoStore {
    @observable taskList = [];

    @action addTask = (task) => {
        this.taskList.push(task);
    }

    @computed get taskCount () {
        return this.taskList.length;
    }
}

const store = new TodoStore();

export default store;