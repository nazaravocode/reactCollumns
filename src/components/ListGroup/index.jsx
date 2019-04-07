import React from 'react';
import { ListGroup } from 'react-bootstrap';
import {  Draggable, Droppable } from 'react-drag-and-drop'


export default ({ items, searchVal, left, columnState, onApply }) => {
  let list = Object.keys(items);
  const { leftColumns, defaultColumns, rightColumns } = columnState;
 // console.log('INIT defaultColumns -> ',defaultColumns);
  if(searchVal && searchVal.length > 0){
    list = list.filter(item => item.match(searchVal) &&  item.match(searchVal) != null);
  }
  const onDrop = data => {
    if(Object.keys(data)[0] === 'left'){
      console.log('onDrop leftColumns -> ',leftColumns);
      console.log('onDrop defaultColumns -> ',defaultColumns);
      console.log('onDrop rightColumns -> ',rightColumns);
      console.log('=============== ');
      let draggableColumnName = data.left;

      let newLeftColumnItem = {[draggableColumnName] : defaultColumns[draggableColumnName]}   ; // мапаешь и выцыпляешь именно тот обэкт чей ключ равен = data
      console.log('onDrop newLeftColumnItem -> ',newLeftColumnItem);
      const newLeftColumn = { ...leftColumns,... newLeftColumnItem };
      console.log('onDrop newLeftColumn -> ',newLeftColumn);
      let newRightColumn = {...defaultColumns}; // Отфильтровуешь новый rightColumn без newLeftColumnItem так как ты его перенес то в правой колонке должно отняться а влевой добавиться
      console.log('onDrop newRightColumn -> ',newRightColumn);
       delete(newRightColumn[draggableColumnName]); // Отфильтровуешь новый rightColumn без newLeftColumnItem так как ты его перенес то в правой колонке должно отняться а влевой добавиться
      console.log('onDrop newRightColumnWithoutDroppedItem after drop -> ',newRightColumn);
      onApply({ leftColumns: newLeftColumn, defaultColumns, rightColumns: newRightColumn });

    } else if(Object.keys(data)[0] === 'right'){
      let addColumnName = data.right;

      let newRightColumnItem = {[addColumnName] : leftColumns[addColumnName]};
      const newRightColumn = { ...rightColumns,... newRightColumnItem };
      let newLeftColumn = {...leftColumns};
      console.log('newLeftColumn before -> ',newLeftColumn)
      delete(newLeftColumn[addColumnName]);
      console.log('newLeftColumn after -> ',newLeftColumn);
      onApply({ leftColumns: newLeftColumn, defaultColumns, rightColumns: newRightColumn });

      //console.log('newLeftColumn -> 'newLeftColumn)
      console.log(data)
    }
  }

  return (
    <ListGroup style={{ width: '45%' }}>
      {
        left ? (
        <Droppable types={['left']} onDrop={onDrop}>
        {(list).map(item =>
        <Draggable key={item + '-ListGroup'} data={item} type='right'>
          <ListGroup.Item >
            {item}
          </ListGroup.Item>
        </Draggable>
        )}
        </Droppable>
      ) : (
        <Droppable types={['right']} onDrop={onDrop}>
        {(list).map(item =>
        <Draggable key={item + '-ListGroup'} data={item} type='left'>
          <ListGroup.Item >
            {item}
          </ListGroup.Item>
        </Draggable>
        )}
        </Droppable>
        )
      }
    </ListGroup>
  );
};


