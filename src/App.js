import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  appContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'cyan'
  },
  blockContainer: {
    width: '40%',
    height: '40%'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow'
  },
  block: {
    height: '20px',
    width: '20px',
    border: '1px solid white'
  },
  color_0: {
    backgroundColor: 'lightgreen'
  },
  color_1: {
    backgroundColor: 'lightblue'
  },
  color_2: {
    backgroundColor: 'yellow'
  },
  bloxes: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '25%',
    backgroundColor: 'green'
  }
});

const gridSize = 4

const App = () => {
  const classes = useStyles();

  const [gameOn, setGameOn] = useState(true);

  const [grid, setGrid] = useState(() => {
    return Array(gridSize).fill(0).map(() => Array(gridSize).fill(0));;
  });

  const [drawGrid, setDrawGrid] = useState(() => {
    let matrix = Array(gridSize).fill(0).map(() => Array(gridSize).fill(0));
    return matrix.map(rows => rows.map(entry => Math.floor(Math.random() * 3)));
  });

  const handleBlockClick = (event) => {
    if (!gameOn) return;
    const i = event.target.getAttribute('i');
    const j = event.target.getAttribute('j');
    const tempGrid = [...grid];
    tempGrid[i][j] = (tempGrid[i][j] + 1) % 3;
    setGrid(tempGrid);
  };

  useEffect(() => {
    if (JSON.stringify(grid) === JSON.stringify(drawGrid)) {
      setGameOn(false);
      setTimeout(() => alert('Great Job!'), 500);
    }
  }, [grid]);

  console.log(window.innerHeight, window.innerWidth);
  const minDim = Math.min(window.innerWidth, window.innerHeight);
  const maxDim = Math.max(window.innerWidth, window.innerHeight);
  let boxDim = minDim;
  let orientation = 'column'

  if (minDim * 2 > maxDim) boxDim = maxDim / 2
  if (window.innerWidth > window.innerHeight) orientation = 'row';

  return (
    <div className={classes.appContainer}>
      <div className={classes.bloxes} style={{ flexDirection: orientation }}>
        <div className={classes.row} style={{ width: boxDim, height: boxDim}}>
          {grid.map((rows, i) => {
            return (
              <div key={i} className={classes.column}>
                {rows.map((column, j) => {
                  return (
                    <div
                      className={`${classes.row} ${classes[`color_${grid[i][j] % 3}`]}`}
                      key={`index-${i}-${j}`}
                      i={i}
                      j={j}
                      onClick={handleBlockClick}
                    />
                  )
                })}
              </div>
            );
          })}
        </div>
        <div className={classes.row} style={{ width: boxDim, height: boxDim}}>
          {drawGrid.map((rows, i) => {
            return (
              <div key={i} className={classes.column}>
                {rows.map((column, j) => {
                  return (
                    <div
                      className={`${classes.row} ${classes[`color_${drawGrid[i][j] % 3}`]}`}
                      key={`index-${i}-${j}`}
                      i={i}
                      j={j}
                      // onClick={handleBlockClick}
                    />
                  )
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default App;