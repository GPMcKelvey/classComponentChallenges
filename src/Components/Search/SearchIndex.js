import React from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends React.Component {
  constructor(props){
    super(props);
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     search: ''
   }
  }
  searchFunction (event) {
    const input = event.target.value;
    this.setState({
      search: input
    });
    
    //console.log(this.state.search);
  }

 render() {
   return(
     <div>
       <Input type="text" placeholder='Search Here' onChange={(event) => this.searchFunction(event)}/>
       <h3>Results:</h3>
       <ul>
         {this.state.things.filter(word => word.includes(this.state.search)).map(filterResult => (
            <li>{filterResult}</li>
          ))}
  </ul>
     </div>
    );
 }
}
 
export default SearchIndex;
