import React from "react";


const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Header TBD</th>
        </tr>
        </thead>
        <tbody>
        { sat.map( data => ( 
        <tr>

          ))}
        <tr>
          <td>Row Data TBD</td>
        </tr>
        ))}
        </tbody>
      </table>
  );
};

export default Table;