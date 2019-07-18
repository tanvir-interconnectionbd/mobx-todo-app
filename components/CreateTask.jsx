import React , { Component } from 'react';
import {inject ,observer } from 'mobx-react';
import { action } from 'mobx';

@inject('TaskStore')
@observer
class CreateTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      taskInput : "",
      taskList : []
    }
  this.onSubmit = this.onSubmit.bind(this);
  this.onItemDelete = this.onItemDelete.bind(this);
  }

  onHandleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onItemDelete (e, id) {
    e.preventDefault()
    console.log("delete",id)
    this.props.TaskStore.deleteTask(id);
    // console.log("delete",id);
  }

  onUpdate (task) {
    // this.props.TaskStore.updateTask(1,"None")
  }




  onSubmit (event)  {
    event.preventDefault();
    const { taskInput, id } = this.state;
    const { TaskStore } =this.props;
    if (taskInput.length > 0) {
      const data = {
        id: id+1,
        name: taskInput
      }
      console.log(data);
      this.props.TaskStore.addTask(data);
      this.setState({
        id: id+1,
        taskInput: ""
      })
    }
  }



  render() {
    const {TaskStore} =this.props;

    return (
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="row">
              <div className="col-md-4 offset-4">
                <div className="card">
                  <div className="card-body">
                    <h1>Total task {TaskStore.taskCount}</h1>
                    <form onSubmit={e=>this.onSubmit(e)}>
                      <input
                        className="form-control"
                        type="text"
                        name="taskInput"
                        value={this.state.taskInput}
                        onChange={this.onHandleChange}
                      />
                      <button
                        className="btn btn-warning pull-left mt-2"
                      >
                        Add
                      </button>
                    </form>
                    <table className="table">
                      <tbody>
                        {
                          TaskStore.taskList.map((elements,key)=>(
                            <tr key={key}>
                              <td>{elements.id}</td>
                              <td>{elements.name}</td>
                              <td><button className="btn btn-success" onClick={this.onUpdate(key)}>Edit</button></td>
                              <td><button className="btn btn-danger" onClick={e=>this.onItemDelete(e, key+1)}>Delete</button></td>
                            </tr>
                        ))
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }

}

export default CreateTask;
