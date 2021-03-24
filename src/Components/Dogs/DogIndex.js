import React, {Component} from 'react';

export default class DogIndex extends Component {
    constructor(props){
        super(props);
        this.state = {
            img: ''
        }
    }

    componentDidMount(event) {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => (
                this.setState({
                    img: data.message
                })
                ))    
    }


    render() {
        return (
            <div style={{padding: "2em"}}>
                <h1>Random Dog Photo</h1>
                <img src={this.state.img}/>
                <br/>
                <button onClick={(event) => this.componentDidMount(event)}>new dog</button>
            </div>
        )
    }
}