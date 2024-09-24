import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class CreateProperty extends Component {
  constructor(props) {
    super(props);

    this.onChangePropertyNumber = this.onChangePropertyNumber.bind(this);
    this.onChangePropertyType = this.onChangePropertyType.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDateAcquired = this.onChangeDateAcquired.bind(this);
    this.onChangeUnitPrice = this.onChangeUnitPrice.bind(this);
    this.onChangeEndUser = this.onChangeEndUser.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      propertyNumber: "",
      propertyType: "",
      description: "",
      dateAcquired: new Date(),
      unitPrice: 0,
      users: [],
      endUser: "",
      status: "",
    };
  }

  onChangePropertyNumber(e) {
    this.setState({ propertyNumber: e.target.value });
  }
  onChangePropertyType(e) {
    this.setState({ propertyType: e.target.value });
  }
  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }
  onChangeDateAcquired(date) {
    this.setState({ dateAcquired: date });
  }
  onChangeUnitPrice(e) {
    this.setState({ unitPrice: e.target.value });
  }
  onChangeEndUser(e) {
    this.setState({ endUser: e.target.value });
  }
  onChangeStatus(e) {
    this.setState({ status: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const property = {
      propertyNumber: this.state.propertyNumber,
      propertyType: this.state.propertyType,
      description: this.state.description,
      dateAcquired: this.state.dateAcquired,
      unitPrice: this.state.unitPrice,
      endUser: this.state.endUser,
      status: this.state.status,
    };

    console.log('Adding the property:', property);

    axios
      .post("http://localhost:5000/properties/add", property)
      .then((res) => console.log(res.data));

    window.location = "/";
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then((response) => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map((user) => user.username),
            username: response.data[0].username,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h3>Add New Property</h3>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Property Number: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.propertyNumber}
              onChange={this.onChangePropertyNumber}
            />
          </div>

          <div className="form-group">
            <label>Property Type: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.propertyType}
              onChange={this.onChangePropertyType}
            />
          </div>

          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <label>Date Acquired: </label>
            <div>
              <DatePicker
                dateFormat="yyyy/MM/dd"
                selected={this.state.dateAcquired}
                onChange={this.onChangeDateAcquired}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Unit Price: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.unitPrice}
              onChange={this.onChangeUnitPrice}
            />
          </div>

          <div className="form-group">
            <label>End User: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.endUser}
              onChange={this.onChangeEndUser}
            >
              {this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {" "}
                    {user}{" "}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label>Status: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.status}
              onChange={this.onChangeStatus}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Add New Property"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
