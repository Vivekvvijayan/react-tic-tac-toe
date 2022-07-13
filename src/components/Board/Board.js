
import './Board.css'
import React, { useState, useEffect, useRef } from 'react'
import Modals from './Modal/Modal';

function Board() {

    const [space, setSpace] = useState(['', '', '', '', '', '', '', '', ''])
    const [turn, setTurn] = useState('0');
    const [winner, setWinner] = useState('');
    const [reset,setReset] = useState(false)
    const [draw, setDraw] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState('0');

    const boardRef = useRef(null);

    const drawTic = (e, pos) => {

        if (winner === '' && space[pos-1] === '')
        {
        setTurn(currentPlayer === '0' ? 'X' : '0')
        setCurrentPlayer(currentPlayer === '0' ? 'X' : '0')
        e.target.innerText = currentPlayer
        space[pos - 1] = currentPlayer;
        }
    }
    // testing use effect

    useEffect(() => {
        setSpace(['', '', '', '', '', '', '', '', ''])
        let cells = boardRef.current.children

        for(let i=1;i<=9;i++){
            console.log('reseted')
        }
        
        setTurn('0')
         setDraw(false)
    }, [draw,reset,winner])



    useEffect(() => {

        const checkRow = () =>{
           
            for(let i=0;i<=9;i+=3){
                if(space[i]===currentPlayer && space[i+1] && space[i]==currentPlayer && space[i+2]==currentPlayer){
                    return true;
                }

            }
        }


        const checkCol = () =>{
           
            for(let i=0;i<=3;i++){
                if(space[i]===currentPlayer&&space[i+3] && space[i]===currentPlayer && space[i+6]==currentPlayer){
                    return true;
                }
            }
        }


        const checkDiagonal = () =>{
            for(let i=0;i<=9;i+=2){
                if(space[i]===currentPlayer && space[i+4]===currentPlayer && space[i+8]==currentPlayer){
                    return true
                }
            }
        }

        const checkWin = () => {

                return (checkRow() || checkCol() || checkDiagonal());

        }

        const checkDraw = () => {
            let count = 0;
            space.forEach((element) => {
                if (element !== '') {
                    count++;
                }
               
            })
            console.log(count)
            if (count === 9) {
                return true;
            }
         
        }


        if (checkWin()) {
            setWinner(currentPlayer === '0' ? "0" : "X")
            setReset(true)
            
        }

        if (checkDraw()) {
            setDraw(true)
            setReset(true)
        }
    },[turn,setTurn,currentPlayer,space])
  

    // testing use effect
 

    return (

        <div className="main">
            <header className="header">
                <h2>Tic Tac Toe</h2>
                <div className="middle-container">
        <div className="toggle">

                    <h3 className={turn==='0' ? "player" : null}>Player 1</h3 >
                    {/* <button>Reset</button> */}
                    <h3 className={turn==='X' ? "player" : null}>Player 2</h3>
        </div>
                  
                </div>
            </header>
            <div className="game_body" >

                <div className="board" ref={boardRef}>
                    <div className="cell b-1" id="1" onClick={(e) => drawTic(e, 1)}></div>
                    <div className="cell b-2" onClick={(e) => drawTic(e, 2)}></div>
                    <div className="cell b-3" onClick={(e) => drawTic(e, 3)}></div>
                    <div className="cell b-4" onClick={(e) => drawTic(e, 4)}></div>
                    <div className="cell b-5" onClick={(e) => drawTic(e, 5)}></div>
                    <div className="cell b-6" onClick={(e) => drawTic(e, 6)}></div>
                    <div className="cell b-7" onClick={(e) => drawTic(e, 7)}></div>
                    <div className="cell b-8" onClick={(e) => drawTic(e, 8)}></div>
                    <div className="cell b-9" onClick={(e) => drawTic(e, 9)}></div>
                </div>



            </div>

            {
                draw ? <Modals draw={draw} message="The game is drawn " /> : null
            }
            {
                winner ? <Modals draw={winner} message="Is winned" /> : null
            }

            <div className="botton_container">

                <button onClick={() => setReset(true)}>Reset</button>
            </div>
        </div>

    )
}

export default Board