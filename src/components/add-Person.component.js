import React, { Component } from "react";
import PersonDataService from "../services/Person.service";
import "../variables.css";

// this is a person component
// add person
export default class AddPerson extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
	this.onChangeAge = this.onChangeAge.bind(this);
    this.savePerson = this.savePerson.bind(this);
    this.newPerson = this.newPerson.bind(this);

    this.state = {
      id: null,
      name: "",
      weight: "", 
      age: "",

      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeWeight(e) {
    this.setState({
      weight: e.target.value
    });
  }
  
    onChangeAge(e) {
    this.setState({
      age: e.target.value
    });
  }

  savePerson() {
    var data = {
      name: this.state.name,
      weight: this.state.weight,
	  age: this.state.age
    };

    PersonDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data._id,
          name: response.data.name,
          weight: response.data.weight,
          age: response.data.age,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newPerson() {
    this.setState({
      id: null,
      name: "",
      weight: "",
      age: "",

      submitted: false
    });
  }

  // add person submit-form
  render() {
    return (
      <div className="submit-form">
        <h4>Add new person</h4>
        {this.state.submitted ? (
          <div>
            <h4>Confirm the addition of the new person</h4>
            <button className="btn btn-success" onClick={this.newPerson}>
              Confirm
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="weight">Weight</label>
              <input
                type="text"
                className="form-control"
                id="weight"
                required
                value={this.state.weight}
                onChange={this.onChangeWeight}
                name="weight"
              />
            </div>
			
			<div className="form-group mb-3">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                className="form-control"
                id="age"
                required
                value={this.state.age}
                onChange={this.onChangeAge}
                name="age"
              />
            </div>

            <button onClick={this.savePerson} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
