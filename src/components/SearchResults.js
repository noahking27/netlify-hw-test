import React from 'react';
// import { Table } from 'reactstrap';

const SearchResults = (props) => {
  console.log(props)
  return (
    <>
    {props.results.map((employee, index) => {
      const {
        picture: {thumbnail},
        dob: {date},
        email,
        name: {first, last},
        phone,
      } = employee;


      return (
        <tr key={index}>
          <td>
          <img alt={employee} className="img-fluid" src={[thumbnail]} /></td>
          <td>{[first, last].join(' ')}</td>
          <td> {phone} </td>
          <td> {email} </td>
          <td> {[date.slice(0, 10)].join(' ')} </td>
      </tr>
    )})}
    </>
  
  );
}

export default SearchResults;
