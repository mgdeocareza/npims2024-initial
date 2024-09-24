import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import 'datatables.net-dt/css/dataTables.dataTables.css';
import "datatables.net";

const NPIMSProperty = (props) => (
  <tr>
    <td>{props.property.propertyNumber}</td>
    <td>{props.property.propertyType}</td>
    <td>{props.property.description}</td>
    <td>{props.property.dateAcquired.substring(0, 10)}</td>
    <td>{props.property.unitPrice}</td>
    <td>{props.property.endUser}</td>
    <td>{props.property.status}</td>
    <td>
      <Link to={"/edit/" + props.property._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteProperty(props.property._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class PropertiesList extends Component {
  constructor(props) {
    super(props);

    this.deleteProperty = this.deleteProperty.bind(this);

    this.state = { properties: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/properties/")
      .then((response) => {
        this.setState({ properties: response.data }, () => {
          // Initialize DataTables after setting the state
          this.initializeDataTable();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    // Cleanup DataTable on unmount
    if ($.fn.DataTable.isDataTable("#propertiesTable")) {
      $("#propertiesTable").DataTable().destroy(true);
    }
  }

  deleteProperty(id) {
    axios.delete("http://localhost:5000/properties/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      properties: this.state.properties.filter((el) => el._id !== id),
    }, () => {
      this.initializeDataTable(); // Reinitialize DataTable after deletion
    });
  }

  initializeDataTable() {
    // Initialize DataTable
    $("#propertiesTable").DataTable({
      // You can add more options here, such as search, paging, etc.
      responsive: true,
      destroy: true, // Ensure that we can reinitialize it
    });
  }

  propertyList() {
    return this.state.properties.map((currentproperty) => {
      return (
        <NPIMSProperty
          property={currentproperty}
          deleteProperty={this.deleteProperty}
          key={currentproperty._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>All Properties!!!</h3>
        <table id="propertiesTable" className="display">
          <thead className="thead-light">
            <tr>
              <th>Property Number</th>
              <th>Property Type</th>
              <th>Description</th>
              <th>Date Acquired</th>
              <th>Unit Price</th>
              <th>End User</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.propertyList()}</tbody>
        </table>
      </div>
    );
  }
}
