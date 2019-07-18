import React , { Component } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'


class Home extends Component {
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
    console.log(event.target.value);
  }

  onSubmit = () => {
    this.setState({

    })
  }



  render() {
    return (
      <div>
        <Head title="Home" />
        <Nav />

        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="row">
              <div className="col-md-4 offset-4">
                <div className="card">
                  <div className="card-body">
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
                    <table className="table">

                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Home
