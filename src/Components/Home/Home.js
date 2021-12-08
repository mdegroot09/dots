import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            turnBlue: true
         }
    }

    render() { 
        let turn = this.state.turnBlue ? 'Blue' : 'Red'
        
        return (
            <div className="home">
                <h1 className="header">Turn: {turn}</h1>
                <div className="board">
                    <div className="row">
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                    </div>
                    <div className="row">
                        <div className="line verticalLine"></div>
                        <div className="line verticalLine"></div>
                        <div className="line verticalLine"></div>
                        <div className="line verticalLine"></div>
                        <div className="line verticalLine"></div>
                    </div>
                    <div className="row">
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                    </div>
                    <div className="row">
                        <div className="line verticalLine"></div>
                        <div className="line verticalLine"></div>
                        <div className="line verticalLine"></div>
                        <div className="line verticalLine"></div>
                        <div className="line verticalLine"></div>
                    </div>
                    <div className="row">
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                    </div>
                    <div className="row">
                        <div className="line verticalLine"></div>
                        <div className="line verticalLine"></div>
                        <div className="line verticalLine"></div>
                        <div className="line verticalLine"></div>
                        <div className="line verticalLine"></div>
                    </div>
                    <div className="row">
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                    </div>
                    <div className="row">
                        <div className="line verticalLine"></div>
                        <div className="line verticalLine"></div>
                        <div className="line verticalLine"></div>
                        <div className="line verticalLine"></div>
                        <div className="line verticalLine"></div>
                    </div>
                    <div className="row">
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                        <div className="line horizontalLine"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Home;