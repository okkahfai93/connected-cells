import React, { Component } from 'react';
import logo from './logo.svg';
import { getMaxNoCells } from './helper';
import './App.css';

interface State {
  rows: number,
  columns: number,
  matrix: number[][],
  maxNoCells: number
}
class App extends Component<{}, State> {
  state = {
    rows: 4,
    columns: 4,
    matrix: [
      [1,1,0,0],
      [0,1,1,0],
      [0,0,1,0],
      [1,0,0,0]
    ],
    maxNoCells: 5,
  }

  renderMatrixButtons = () => (
    this.state.matrix.map((row, n) => {
      return (
        <p>
          {row.map((value, m) => {
            return (
              <button
                onClick={e => this.toggleMatrixValue(n, m)}
              >{value}
              </button>
            );
          })}
        </p>
      );
    })
  )

  toggleMatrixValue = (n: number,m: number) => {
    this.setState((prevState): any => {
      prevState.matrix[n][m] = prevState.matrix[n][m] ? 0 : 1;
      let newM = JSON.parse(JSON.stringify( prevState.matrix ));
      return { matrix: prevState.matrix, maxNoCells: getMaxNoCells(newM) };
    });
  }

  changeRow = (e: any) => {
    let matrix: number[][] = [];
    for(let i = 0; i < e.target.value; i++){
      let arr: number[] = [];
      for (let i = 0; i < this.state.columns; i++) {
        arr.push(0);
      }
      matrix.push(arr);
    }
    this.setState({ rows: Number(e.target.value), matrix })
  }

  changeColumn = (e: any) => {
    let matrix: number[][] = this.state.matrix;
    matrix = matrix.map(row => {
      let arr: number[] = [];
      for(let i = 0; i < e.target.value; i++) {
        arr.push(0);
      }
      return arr;
    });

    this.setState({ rows: Number(e.target.value), matrix })
  }

  render() {
    const { matrix, rows, columns, maxNoCells } = this.state;
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <label>n <input type="number" min="1" max="10" id="rows" value={rows} onChange={this.changeRow}/></label>
            <br></br>
          <label>m <input type="number" min="1" max="10" id="rows" value={columns} onChange={this.changeColumn}/></label>
          <p>
            {this.renderMatrixButtons()}
          </p>
          <p>
            Number of cells in the largest region: {maxNoCells}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
