import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            turnBlue: true,
            redScore: 0,
            blueScore: 0
        }
    }

    componentDidMount = () => {
        for(let i = 1; i <= 9; i++){
            let jLimit = i % 2 === 0 ? 5 : 4
            let obj = {}
            for (let j = 1; j <= jLimit; j++){
                obj[`column${j}`] = false
            }
            this.setState({
                [`row${i}`]: obj
            })
        }   
    }

    fillLine = (id, row, column) => {
        let {turnBlue, blueScore, redScore} = this.state
        let background = this.state.turnBlue ? 'blue' : 'red'
        let e = document.getElementById(id)
        e.style.background = background
        e.style.pointerEvents = 'none'
        let obj = this.state[`row${row}`]
        obj[`column${column}`] = true
        this.setState({[`row${row}`]: obj})
        this.checkFullSquare(row, column, blueScore, redScore)
        this.setState({turnBlue: !turnBlue})
    }

    checkFullSquare = (row, column, blueScore, redScore) => {
        let {turnBlue} = this.state
        let background = turnBlue ? 'lightblue' : 'pink'
        let verticalLine = row % 2 === 0 ? true : false
        let remainingChecks = (!verticalLine && row > 1 && row < 9) || (verticalLine && column > 1 && column < 5) ? 2 : 1

        do {
            row = !verticalLine && row === 9 ? row - 2 : row
            column = verticalLine && column === 5 ? column - 1 : column
            if (verticalLine){
                let top = this.state[`row${row - 1}`][`column${column}`]
                let bottom = this.state[`row${row + 1}`][`column${column}`]
                let left = this.state[`row${row}`][`column${column}`]
                let right = this.state[`row${row}`][`column${column + 1}`]
                if (top && bottom && left && right){
                    document.getElementById(`row${row - 1}column${column}`).style.background = background
                    turnBlue ? blueScore++ : redScore++
                }
            }
            
            if (!verticalLine){
                let top = this.state[`row${row}`][`column${column}`]
                let bottom = this.state[`row${row + 2}`][`column${column}`]
                let left = this.state[`row${row + 1}`][`column${column}`]
                let right = this.state[`row${row + 1}`][`column${column + 1}`]
                if (top && bottom && left && right){
                    document.getElementById(`row${row}column${column}`).style.background = background
                    turnBlue ? blueScore++ : redScore++
                }
            }

            verticalLine ? column-- : (row-- && row--)
            remainingChecks--
        } while (remainingChecks > 0)

        this.setState({blueScore, redScore})
    }

    render() { 
        let turn = this.state.turnBlue ? 'Blue' : 'Red'
        let {blueScore, redScore} = this.state
        
        return (
            <div className="home">
                <h1 className="header">
                    <span style={{color: 'blue', marginRight: '50px'}}>Blue: {blueScore}</span>
                    <span style={{color: 'red'}}>Red: {redScore}</span>
                </h1>
                <div className="turn">
                    Turn: <span style={{color: this.state.turnBlue ? 'blue' : 'red'}}>{turn}</span>
                </div>
                <div className="board">
                    <div className="row">
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 1, 1)}}></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 1, 2)}}></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 1, 3)}}></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 1, 4)}}></div>
                        <div className="dot"></div>
                    </div>
                    <div className="row">
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 2, 1)}}></div>
                        <div className="square" id="row1column1"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 2, 2)}}></div>
                        <div className="square" id="row1column2"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 2, 3)}}></div>
                        <div className="square" id="row1column3"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 2, 4)}}></div>
                        <div className="square" id="row1column4"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 2, 5)}}></div>
                    </div>
                    <div className="row">
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 3, 1)}}></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 3, 2)}}></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 3, 3)}}></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 3, 4)}}></div>
                        <div className="dot"></div>
                    </div>
                    <div className="row">
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 4, 1)}}></div>
                        <div className="square" id="row3column1"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 4, 2)}}></div>
                        <div className="square" id="row3column2"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 4, 3)}}></div>
                        <div className="square" id="row3column3"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 4, 4)}}></div>
                        <div className="square" id="row3column4"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 4, 5)}}></div>
                    </div>
                    <div className="row">
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 5, 1)}}></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 5, 2)}}></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 5, 3)}}></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 5, 4)}}></div>
                        <div className="dot"></div>
                    </div>
                    <div className="row">
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 6, 1)}}></div>
                        <div className="square" id="row5column1"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 6, 2)}}></div>
                        <div className="square" id="row5column2"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 6, 3)}}></div>
                        <div className="square" id="row5column3"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 6, 4)}}></div>
                        <div className="square" id="row5column4"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 6, 5)}}></div>
                    </div>
                    <div className="row">
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 7, 1)}}></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 7, 2)}}></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 7, 3)}}></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 7, 4)}}></div>
                        <div className="dot"></div>
                    </div>
                    <div className="row">
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 8, 1)}}></div>
                        <div className="square" id="row7column1"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 8, 2)}}></div>
                        <div className="square" id="row7column2"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 8, 3)}}></div>
                        <div className="square" id="row7column3"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 8, 4)}}></div>
                        <div className="square" id="row7column4"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 8, 5)}}></div>
                    </div>
                    <div className="row">
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 9, 1)}}></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 9, 2)}}></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 9, 3)}}></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 9, 4)}}></div>
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;