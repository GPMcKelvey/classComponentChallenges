import React, {Component} from 'react';
import { __esModule } from 'reactstrap/lib/Container';
import DogDisplay from './DogDisplay';

export default class DogIndex extends Component {
    constructor(props){
        super(props);
        this.state = {
            img: ''
        }
    }

    componentDidMount(event) {
        console.log('Component mounted!')
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => (
                this.setState({
                    img: data.message
                })
                ))
                console.log(this.state.img);
    }


    render() {
        return (
            <div style={{padding: "2em"}}>
                <h1>Random Dog Photo</h1>
                <DogDisplay img={this.state.img}/>
                <br/>
                <button onClick={(event) => this.componentDidMount(event)}>new dog</button>
            </div>
        )
    }
}