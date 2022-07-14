
import './Board.css'
import React, { useState, useEffect, useRef } from 'react'
import Modals from './Modal/Modal';

function Board() {

    const [space, setSpace] = useState(['', '', '', '', '', '', '', '', ''])
    const [turn, setTurn] = useState('0');
    const [winner, setWinner] = useState('');
    const [reset, setReset] = useState(false);
    const [draw, setDraw] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState('0');

    const boardRef = useRef(null);

    // to draw tics on screen
    const drawTic = (e, pos) => {

        if (space[pos - 1] === '') {
            space[pos - 1] = currentPlayer;
            e.target.innerText = currentPlayer;
            setTurn(turn === '0' ? 'X' : '0');
            setCurrentPlayer(turn === '0' ? 'X' : '0');
            return;
        }
    }


    //to reset game to initial state

    useEffect(() => {
       
        space.forEach((item,index) => {
            space[index] = ''
        })
        let cells = boardRef.current.children

        for (let i = 0; i < 9; i++) {
            cells[i].innerText = ''
        }
       
        
    
    }, [reset,winner,setWinner])


    // to check for winner and game over conditions
    useEffect(() => {

        const checkRow = () => {

            for (let i = 0; i < 9; i += 3) {

                if (space[i] === space[i+1] && space[i] && space[i+2] && space[i]!=='') {
                    return true;
                }

            }
    
        }


        const checkCol = () => {

            for (let i = 0; i < 3; i++) {
                if (space[i] === space[i + 3] &&space[i] === space[i + 6] && space[i]!=='') {
                    return true;
                }
            }
          
        }

        const checkDiagonal = () => {
                if ((space[0] === space[4] && space[4]=== space[8]&&space[4]!=='') || (space[2] === space[4] && space[4] === space[6]&& space[4]!=='')) {
                    return true;
                }
            }
        


        // checking for game over conditions

        const checkDraw = () => {
            let count = 0;
            space.forEach((element) => {
                if (element !== '') {
                    count++;
                }
                

            })
            
            return count === 9;

        }
        const checkWin = () => {

            return checkRow() || checkCol() || checkDiagonal();

        }

        if (checkWin()) {
            setWinner(turn === '0' ? 'X' : '0');
            setReset(true);
        } else if(checkDraw()) {
            setDraw(true)
            setReset(true)
        }
    })


    // testing use effect
    return (

        <div className="main">
            <header className="header">
                <h2>Tic Tac Toe</h2>
                <div className="middle-container">
                    <div className="toggle">

                        <h3 className={turn === '0' ? "player" : null}>Player 1</h3 >
                        {/* <button>Reset</button> */}
                        <h3 className={turn === 'X' ? "player" : null}>Player 2</h3>
                    </div>

                </div>
            </header>
            <div className="game_body" >

                <div className="board" ref={boardRef}>
                    <div className="cell b-1" onClick={(e) => drawTic(e, 1)}></div>
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
                winner ? <Modals draw={winner} message="WINNER" /> : null
            }

            <div className="botton_container">

                <button onClick={() => setReset(true)}>Reset</button>
            </div>
        </div>

    )
}

export default Board