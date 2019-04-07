import React, { PureComponent } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ListGroup from '../ListGroup';
import InputSearch from '../InputSearch';
import { actionOnApply } from '../../actions';
import { connect } from 'react-redux';
import { Draggable, Droppable } from 'react-drag-and-drop'
 class App  extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      searchVal: ''
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleApply = this.handleApply.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);

  }


  handleClose() {
    this.setState({ show: false });
  }
  handleApply() {

    const { leftColumns, defaultColumns, rightColumns } = this.props.columnState;
    this.props.onApply({ rightColumns, defaultColumns, leftColumns });

    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  onChangeSearch(e){
    this.setState({ searchVal: e.target.value });
  }

  render() {

    const {
      show,
      searchVal,
    } = this.state;

    const {
      leftColumns,
      defaultColumns,
      rightColumns
    } = this.props.columnState;

    const allRightColumns = {...rightColumns, ...defaultColumns};


    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Select Grid Columns
        </Button>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <InputSearch
              onChangeSearch={this.onChangeSearch}
              searchVal={searchVal}
            />
          </Modal.Header>

          <Modal.Body
            style={{
              display: 'inline-flex',
              justifyContent: 'space-between'
            }}>

            <ListGroup
              style={{ marginRigth: 10 }}
              left={true}
              items={leftColumns}
              searchVal={searchVal}
              columnState={this.props.columnState}
              onApply={this.props.onApply}
            />


            <ListGroup
              items={allRightColumns}
              columnState={this.props.columnState}
              onApply={this.props.onApply}
              left={false}
            />

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleApply}>
              Apply
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onApply: payload => dispatch(actionOnApply(payload))
});

const mapStateToProps = state => ({
  columnState: state.columnState,
});

export default connect(mapStateToProps, mapDispatchToProps)(App)