import React, { Component } from 'react';

class AddUserForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            gen: "",
            email: ""
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted", this.state)
        this.props.addUser(this.state)
        this.setState({...this.state, name: "", gen: "", email: ""})
    } 
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="">Gen</label>
                    <input type="text" name="gen" onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" onChange={this.handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default AddUserForm;
