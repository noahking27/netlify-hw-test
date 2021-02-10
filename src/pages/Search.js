import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar";
import Form from "../components/Form";
import SearchResults from "../components/SearchResults";
import Wrapper from "../components/Wrapper";
import '../styles/table.css';
import { Table } from 'reactstrap';

class Search extends Component {
  state = {
    results: [],
    search: "",
  };

  componentDidMount() {
    API.getRandomUsers()
    // console.log(API.getRandomUsers())
    .then(res => this.setState({ results: res.data.results }))
    .catch(err => console.log(err));
  };
  
  handleInputChange = event => {
    console.log("new value",event.target.value);
    if (event.target.name === "search") {
      // console.log("this is search")
      const searchTerm = event.target.value.toLowerCase();
      this.setState({
        search: searchTerm
      })
    }
  }

  sortByLastName = () => {
    const sortedEmployees = this.state.results.sort((a, b) => {
      if (b.name.last > a.name.last) {
        return -1
      }
      if (a.name.last > b.name.last) {
        return 1
      }
      return 0;
    });
    if (this.state.sortOrder === "descending") {
      sortedEmployees.reverse();
      this.setState({ sortOrder: "ascending" });
    } else {
      this.setState({ sortOrder: "descending" });
    }
    this.setState({ results: sortedEmployees })
}

  render() {
    return (
    <div>
      <Navbar />
      <Form
       handleInputChange = {this.handleInputChange}/>
      <Wrapper>
      <Table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name<span className="downArrow" onClick={this.sortByLastName}></span></th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
        <SearchResults
         results = {this.state.results} />
      </tbody>
    </Table>
      </Wrapper>
    </div>
    )}
}

export default Search;  