import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
// import './CustomToggle';
class AddUserComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            age: '',
            salary: '',
            gender:'',
            message: null
        }
        this.saveUser = this.saveUser.bind(this);
    }
    onChange = (e) =>{
        this.setState({ [e.target.name]: e.currentTarget.value },
            );
    }
    saveUser = (e) => {
        e.preventDefault();
        let user = {username: this.state.username, password: this.state.password,
             firstName: this.state.firstName, lastName: this.state.lastName, 
             age: this.state.age, salary: this.state.salary, gender: this.state.gender};
        ApiService.addUser(user)
            .then(res => {
                this.setState({message : 'User added successfully.'});
                this.props.history.push('/users');
            });
    }

    

    render() {
        return(
            <div >
                <h2 className="text-center">Add User</h2>
                <form>
                <div className="form-group">
                    <label>User Name:</label>
                    <input type="text" placeholder="username" name="username" className="form-control" value={this.state.username} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>First Name:</label>
                    <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Last Name:</label>
                    <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Age:</label>
                    <input type="number" placeholder="age" name="age" className="form-control" value={this.state.age} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Salary:</label>
                    <input type="number" placeholder="salary" name="salary" className="form-control" value={this.state.salary} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                        <label>Gender</label>
                        <div className="radio">
                            <label>
                                <input type="radio" name='gender' value='Male' onChange={this.onChange} 
                                 />
                                Male
                            </label>
                            </div>
                            <div className="radio">
                            <label>
                                <input type="radio" name='gender' value='Female' onChange={this.onChange} />
                                Female
                            </label>
                            </div>
                            <div className="radio">
                            <label>
                                <input type="radio"name='gender' value='Other' onChange={this.onChange}/>
                                Others
                            </label>
                        </div>
                    </div>
                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
            </form>
            {/* <CustomToggle /> */}
    </div>
        );
    }
}

export default AddUserComponent;