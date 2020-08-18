import React, { Component } from "react";
import axios from "axios";

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Avatar: "",
      Profession: "",
      Department: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:56749/api/users", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { name, avatar, profession, department } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <center>
            <h4 class="card-title">Add User</h4>
          </center>
          <div class="card-body">
            <div class="Textsize">
              Name: &nbsp;&nbsp;
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.changeHandler}
              ></input>
            </div>
            <div class="Textsize">
              Avatar: &nbsp;&nbsp;
              <input
                type="text"
                name="avatar"
                value={avatar}
                onChange={this.changeHandler}
              ></input>
            </div>
            <div class="Textsize">
              Profession: &nbsp;&nbsp;
              <input
                type="text"
                name="profession"
                value={profession}
                onChange={this.changeHandler}
              ></input>
            </div>
            <div class="Textsize">
              Department: &nbsp;&nbsp;
              <input
                type="text"
                name="department"
                value={department}
                onChange={this.changeHandler}
              ></input>
              <div>&nbsp;</div>
            </div>
            <button class="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddUser;
