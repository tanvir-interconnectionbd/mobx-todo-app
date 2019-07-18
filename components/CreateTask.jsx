import React , { Component } from 'react';
import {inject ,observer } from 'mobx-react';
import { action } from 'mobx';

@inject('TaskStore')
@observer
class CreateTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskInput : "",
      taskList : []
    }

  }

  onHandleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.TaskStore.addTask(this.state.taskInput);
    this.setState({
      taskInput: ""
    })
  }



  render() {
    const {TaskStore} =this.props;
    console.log("Watch",TaskStore.taskList[0]);
    return (
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="row">
              <div className="col-md-4 offset-4">
                <div className="card">
                  <div className="card-body">
                    <h1>Total task {TaskStore.taskCount}</h1>
                    <form onSubmit={this.onSubmit}>
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
                      {
                        TaskStore.taskList.map(elements=>(
                          <tr>
                            <td key={elements}>{elements}</td>
                            <td><button className="btn btn-success">Edit</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                          </tr>
                      ))
                      }
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
