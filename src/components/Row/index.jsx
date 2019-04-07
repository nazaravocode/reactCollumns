import React from 'react';

export default ({ name, lastName, password, id }) => (
  <tr>
    <td>{id}</td>
    <td>{name}</td>
    <td>{lastName}</td>
    <td>{password}</td>
  </tr>
);