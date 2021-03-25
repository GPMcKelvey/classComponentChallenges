import React, {Component} from 'react';
import {Button} from 'reactstrap';

class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            task: '',
        
        } 
        this.addTask = this.addTask.bind(this);
    }

    addTask(e){
        if (this._inputElement.value !== "") {
            let newTask = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    list: prevState.list.concat(newTask)
                }
            }
            )
        }
        this._inputElement.value='';
        console.log(this.state.list);
        e.preventDefault();
    }

    deleteTask(key) {
        let finishedTask = this.state.list.filter(function (results) {
            return(results.key !== key);
        });
        this.setState({
            list: finishedTask
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.addTask}>
                    <input ref={(a) => this._inputElement = a} type='text' placeholder='Enter Task' />
                    <Button type='submit'>Add</Button>
                </form>
                <ul>
                    {
                        this.state.list.map(results => (
                            <li onClick={() => this.deleteTask(results.key)} key={results.key} style={{cursor: 'pointer', background: '#808080', marginBottom: '.25em'}}>{results.text}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default ToDoList;