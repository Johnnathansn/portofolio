import React, { Component } from 'react';


class TodoForm extends Component {
    constructor(props) {
        super(props);

        // application states
        this.state = {
            taskList: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }


    // event to handle all change in the input
    handleChange(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({ [e.target.name]: value });

    }

    // event to handle the submit action
    handleSubmit(e) {
        e.preventDefault();

        if(this.state.taskInput !== "" && this.state.taskInput !== undefined) {

            let newTask = {
                value: this.state.taskInput,
                key: Date.now()
            }

            let tasks = this.state.taskList;
            tasks.push(newTask);

            this.setState({
                taskList: tasks
            });


            document.getElementById("taskInput").value = "";
            this.setState({taskInput: ""});
        }

    }

    // check for the "enter" key press
    handleKeyPress(e) {
        if (e.key === "Enter")
            if(this.state.taskInput !== "" && this.state.taskInput !== undefined)
                this.handleSubmit(e);
    }

    // deletes an item from the list
    deleteItem(key) {
        let filteredItems = this.state.taskList.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            taskList: filteredItems
        });
    }


    render() {

        return (
        <div>

            <form onSubmit={this.handleSubmit}>
                <label>
                    New Task:
                </label>

                <input
                    className="mar5"
                    type="text"
                    id="taskInput"
                    name="taskInput"
                    value={this.state.value}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress} />

                <input type="submit" value="Save" />
                <div>
                    <ul className="taskPointList">
                        {
                        this.state.taskList.map((task) => {

                            return (
                                <li key={task.key}>
                                    <input  type="checkbox"
                                            name={'taskChk' + task.key}
                                            id={'taskChk' + task.key}
                                            onClick={() => this.deleteItem(task.key)}
                                    />
                                    <label className="pad5">{task.value}</label>
                                </li>
                            );

                        })
                        }
                    </ul>
                </div>
            </form>

        </div>
        );
    }
}

export default TodoForm;
