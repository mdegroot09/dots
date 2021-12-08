import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            turnBlue: true,
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
        console.log(this.state)
        let {turnBlue} = this.state
        let background = this.state.turnBlue ? 'blue' : 'red'
        let e = document.getElementById(id)
        e.style.background = background
        e.style.pointerEvents = 'none'
        let obj = this.state[`row${row}`]
        obj[`column${column}`] = true
        this.setState({[`row${row}`]: obj})
        let fullSquare = this.checkFullSquare(row, column)
        fullSquare ? console.log('yay') : this.setState({turnBlue: !turnBlue})
    }

    checkFullSquare = (row, column) => {
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
                    console.log('full square')
                }
                else {
                    console.log('nope')
                }
            }
            
            if (!verticalLine){
                let top = this.state[`row${row}`][`column${column}`]
                let bottom = this.state[`row${row + 2}`][`column${column}`]
                let left = this.state[`row${row + 1}`][`column${column}`]
                let right = this.state[`row${row + 1}`][`column${column + 1}`]
                if (top && bottom && left && right){
                    console.log('full square')
                }
                else {
                    console.log('nope')
                }
            }

            verticalLine ? column-- : (row-- && row--)
            remainingChecks--
        } while (remainingChecks > 0)
    }

    render() { 
        let turn = this.state.turnBlue ? 'Blue' : 'Red'
        
        return (
            <div className="home">
                <h1 className="header">Turn: {turn}</h1>
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
                        <div className="square" id="square1"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 2, 2)}}></div>
                        <div className="square" id="square2"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 2, 3)}}></div>
                        <div className="square" id="square3"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 2, 4)}}></div>
                        <div className="square" id="square4"></div>
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
                        <div className="square" id="square5"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 4, 2)}}></div>
                        <div className="square" id="square6"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 4, 3)}}></div>
                        <div className="square" id="square7"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 4, 4)}}></div>
                        <div className="square" id="square8"></div>
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
                        <div className="square" id="square9"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 6, 2)}}></div>
                        <div className="square" id="square10"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 6, 3)}}></div>
                        <div className="square" id="square11"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 6, 4)}}></div>
                        <div className="square" id="square12"></div>
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
                        <div className="square" id="square13"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 8, 2)}}></div>
                        <div className="square" id="square14"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 8, 3)}}></div>
                        <div className="square" id="square15"></div>
                        <div className="line verticalLine" id={`a${Math.random()}`} onClick={(e) => {this.fillLine(e.target.id, 8, 4)}}></div>
                        <div className="square" id="square16"></div>
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