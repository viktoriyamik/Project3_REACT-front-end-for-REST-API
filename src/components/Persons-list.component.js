import React, { Component } from "react";
import PersonDataService from "../services/Person.service";
import { Link } from "react-router-dom";
import "../variables.css";


export default class PersonsList extends Component {
  constructor(props) {
    super(props);
    this.retrievePersons = this.retrievePersons.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePerson = this.setActivePerson.bind(this);

    this.state = {
      Persons: [],
      currentPerson: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrievePersons();
  }


  onChangeSearchName(e) {
    const searchName = e.target.value;

   var /*input,*/ filter, table, tr, td, i, txtValue;
   //input = document.getElementById("myInput");
   filter = searchName.toUpperCase();
   table = document.getElementsByClassName("list-group");
   tr = table[0].getElementsByTagName("li");
   for (i = 0; i < tr.length; i++) {
    td = tr[i];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
   }
  }

  retrievePersons() {
    PersonDataService.getAll()
      .then(response => {
        this.setState({
          Persons: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrievePersons();
    this.setState({
      currentPerson: null,
      currentIndex: -1
    });
  }

  setActivePerson(Person, index) {
    this.setState({
      currentPerson: Person,
      currentIndex: index
    });
  }

  render() {
    const { searchName, Persons, currentPerson, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
          </div>
        </div>
        <div className="col-md-6">
          <h4>Persons List</h4>

          <ul className="list-group">
            {Persons &&
              Persons.map((Person, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActivePerson(Person, index)}
                  key={index}
                >
                  {Person.name}
                </li>
              ))}
          </ul>

        </div>

        <div className="col-md-6">
          {currentPerson ? (
            <div>
              <h4>Person</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentPerson.name}
              </div>
              <div>
                <label>
                  <strong>Weight:</strong>
                </label>{" "}
                {currentPerson.weight}
              </div>
              <div>
                <label>
                  <strong>Age:</strong>
                </label>{" "}
                {currentPerson.age}
              </div>
              <Link
                to={"/Persons/" + currentPerson._id}
                className="btn btn-warning">
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Person...</p>
            </div>
          )}
        </div>
      </div>

    );
  }
}
