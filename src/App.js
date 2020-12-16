import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  block: {
    height: '50px',
    width: '50px',
    border: '1px solid white',
    backgroundColor: 'lightblue'
  }
});

const rows = new Array(9).fill(0);
const columns = Array(9).fill(0);

const App = () => {
  const classes = useStyles();

  return (
    <div>
      {rows.map((row, i) => {
        return (
          <div key={i} className={classes.row}>
            {columns.map((column, j) => {
              return (
                <div className={classes.block} key={`index-${i}-${j}`}></div>
              )
            })}
          </div>
        );
      })}
    </div>
  )
}

export default App;