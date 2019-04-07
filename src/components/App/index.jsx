import React from 'react';
import GridColumns from '../GridColumns';
import Table from '../Table';
import { connect } from 'react-redux';

const App = ({ renderColumns }) => {


  return (
    <div
      style={{ padding: '10px 150px 10px 150px' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 50px 10px 50px'
          }}>
        <h2>User Table</h2>
        <GridColumns />
      </div>
      <Table renderColumns={renderColumns}/>
    </div>
  )
}


function mapStateToProps(state) {
  const renderColumns = state.columnState.renderColumns
  return {
    renderColumns
  }
}


export default connect(mapStateToProps)(App);