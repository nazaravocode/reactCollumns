const initialState = {
  renderColumns: {
    id:[2, 123, 345, 112, 98],
    name:['name1', 'name2', 'name3', 'name4', 'name5'],
    lastName:['lastName1', 'lastName2', 'lastName3', 'lastName4', 'lastName5'],
    password:['password1', 'password2', 'password3', 'password4', 'password5'],
  },
  defaultColumns: {
    column5:['column5_1','column5_2','column5_3','column5_4','column5_5'],
    column6:['column6_1','column6_2','column6_3','column6_4','column6_5'],
    column7:['column7_1','column7_2','column7_3','column7_4','column7_5'],
    column8:['column8_1','column8_2','column8_3','column8_4','column8_5']

  },
  leftColumns: {
    column9:['column9_1','column9_2','column9_3','column9_4','column9_5'],
    column10:['column10_1','column10_2','column10_3','column10_4','column10_5'],
    column11:['column11_1','column11_2','column11_3','column11_4','column11_5']
  },
  rightColumns: {

  }
};


export default (state = initialState, action) => {
  switch (action.type) {
    case 'ON_APPLY': {
  const {
    defaultColumns,
    rightColumns
  } = action.payload;

  const renderColumns = [
    rightColumns,
    defaultColumns
  ];

    return {
      ...state,
        renderColumns,
        defaultColumns,
        rightColumns
      }
    }
    default:
      return state;
  }
}
