import React, { Component } from "react";
import PersonDataService from "../services/Person.service";
import { withRouter } from '../common/with-router';
import "../variables.css";

// this a person component
// delete and update operations
class Person extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
	this.onChangeAge = this.onChangeAge.bind(this);
    this.getPerson = this.getPerson.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updatePerson = this.updatePerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);

    this.state = {
      currentPerson: {
        _id: 111,
        name: "",
        weight: "",
        age: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getPerson(this.props.router.params.id);
	console.log(this.props.router.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentPerson: {
          ...prevState.currentPerson,
          name: name
        }
      };
    });
  }

  onChangeWeight(e) {
    const weight = e.target.value;
    
    this.setState(prevState => ({
      currentPerson: {
        ...prevState.currentPerson,
        weight: weight
      }
    }));
  }
  
    onChangeAge(e) {
    const age = e.target.value;
    
    this.setState(prevState => ({
      currentPerson: {
        ...prevState.currentPerson,
        age: age
      }
    }));
  }

  getPerson(id) {
    PersonDataService.get(id)
      .then(response => {
        this.setState({
          currentPerson: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentPerson.id,
      name: this.state.currentPerson.name,
      weight: this.state.currentPerson.weight,
      age: this.state.currentPerson.age
    };

    PersonDataService.update(this.state.currentPerson.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentPerson: {
            ...prevState.currentPerson,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePerson() {
    PersonDataService.update(
      this.state.currentPerson._id,
      this.state.currentPerson
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The Person was updated."
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deletePerson() {    
    PersonDataService.delete(this.state.currentPerson._id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/Persons');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentPerson } = this.state;

    return (
      <div>
        {currentPerson ? (
          <div className="edit-form">
            <h4>Person</h4>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentPerson.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="weight">Weight</label>
                <input
                  type="text"
                  className="form-control"
                  id="weight"
                  value={currentPerson.weight}
                  onChange={this.onChangeWeight}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="age">Age</label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  value={currentPerson.age}
                  onChange={this.onChangeAge}
                />
              </div>

            </form>

            <div class="modal-footer">
              
            <button
              className="btn btn-secondary" 
              onClick={this.deletePerson}
            >
              Delete
            </button>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.updatePerson}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Person.</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Person);