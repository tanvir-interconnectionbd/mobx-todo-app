import {observable, action, computed} from 'mobx'
class TodoStore {
    @observable taskList = [];

    @action addTask = (task) => {
        this.taskList.push(task);
    }

    // @action updateTask = (key,value) => {
    //     this.taskList.filter.se
    // }

    @action deleteTask = (id) => {
        console.log("MObx",id)
        const index = this.taskList.findIndex(item => item.id == id);
        this.taskList.splice(index, 1);
    }

    @computed get taskCount () {
        return this.taskList.length;
    }
}

const store = new TodoStore();

export default store;