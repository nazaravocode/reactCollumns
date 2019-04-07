import React from 'react';
import { Table } from 'react-bootstrap';
import Row from '../Row';
import { connect } from 'react-redux';


const MyTable =  ({ renderColumns }) =>  {
  const mainRenderColumns = Array.isArray(renderColumns)  ?  {...renderColumns[0], ...renderColumns[1]}: renderColumns
  console.log(mainRenderColumns)
  return (
      <Table striped bordered hover>
        <thead>
          <tr>
            {Object.keys(mainRenderColumns).map(item => <td key={item}>{item}</td>)}
          </tr>
        </thead>
        <tbody>
        <tr>
          {
            Object.values(mainRenderColumns).map(
              (item, index) =>
              <td key={index + '-columns'}>
                <ul>

                {item.map(element =>

                <li key={element}>{element}</li>
                )}

                </ul>
              </td>
              )}
        </tr>
        </tbody>
      </Table>
  )
};

const mapStateToProps = (state) => {
  return {
    renderColumns: state.columnState.renderColumns
  }
};

export default connect(mapStateToProps)(MyTable)