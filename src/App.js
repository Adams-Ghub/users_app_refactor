import React from 'react';
import './App.css';
import User from './User';

import AddUserForm from './AddUserForm';

class  App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        users: [
            { name: "Kwaku", gen: 12, email: "kwaku@email.com" },
            { name: "Ama", gen: 1, email: "ama@email.com" },
            { name: "Kofi", gen: 10, email: "kofi @email.com" },
        ]
    }
}
handleAddUser = (item) => {
    console.log(item);
    this.setState({
        ...this.state, users: [...this.state.users, item]
    })
}
  render(){
    return (
      <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{padding:'30px',width:'40vw'}}>
                     <AddUserForm addUser={this.handleAddUser} />
                </div>
                
                <div style={{marginLeft:'50px', width:'30vw'}}>
                    {
                        this.state.users.map((user, index) => {
                            return <User key={index} name={user.name} gen={user.gen} email={user.email} />
                        })
                    }
                </div>
            </div>
    );
    
  }
 
}

export default App;
