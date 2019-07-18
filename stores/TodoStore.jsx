import {observable, action, computed} from 'mobx'
class TodoStore {
    @observable taskList = [];

    @action addTask = (task) => {
        this.taskList.push(task);
    }

    @action updateTask = (id,value) => {
        const obj = this.taskList.findIndex(item => item.id == id);
        this.taskList[obj]?this.taskList[obj].name = value:"";
    
    }

    @action deleteTask = (id) => {
        const index = this.taskList.findIndex(item => item.id == id);
        this.taskList.splice(index, 1);
    }

    @computed get taskCount () {
        return this.taskList.length;
    }
}

const store = new TodoStore();

export default store;