
import './Board.css'
import React,{ useState,useEffect,useRef } from 'react'
import Modals from './Modal/Modal';

function Board() {

    const [space,setSpace] = useState(['','','','','','','','',''])
    const [turn,setTurn] = useState('0');
    const [winner,setWinner] = useState('');
    
    const[ draw,setDraw] = useState(false);
    const [currentPlayer,setCurrentPlayer] = useState('0');


    const boardRef = useRef(null);



    const drawTic = (e,pos) =>{
        
        if(winner===''&& space[pos-1]==='')
 
         
        setTurn( currentPlayer === '0' ? 'X': '0' )
        setCurrentPlayer( currentPlayer === '0' ? 'X': '0' )
         e.target.innerText=currentPlayer
        space[pos-1]=currentPlayer;
        console.log(space)
         
 
     }


// testing use effect





useEffect(()=>{
    const checkWin = () => {

        if(space[0] === currentPlayer){
            // checking [ 0,1,2 ] combination

            if(space[1]===currentPlayer && space[2] === currentPlayer){
                console.log(currentPlayer+ 'wins [ 0,1,2 ] pattern wins');
                return true;
            }

                // checking [ 0,3,6 ] combination

                if(space[3] === currentPlayer && space[6] === currentPlayer){
                    console.log(currentPlayer+ 'wins [ 0,3,6 ] pattern wins');
                    return true;
                }

                // diagonal checking

                if(space[4] ===currentPlayer && space[8] === currentPlayer){
                    console.log(currentPlayer + 'wins');
                    return true;
                }

        }

        // 8 common point checking


        if(space[8]===currentPlayer){
            // checking [ 2,5,8 ]
            if(space[5] === currentPlayer && space[2] === currentPlayer){
                console.log(currentPlayer+'wins');
                return true;
            }
            // chcking horizontal pattern

            if(space[7] === currentPlayer && space[6] === currentPlayer){
                console.log(currentPlayer+ 'wins');
                return true;
            }
        }

    }


    if(checkWin()){
        setWinner( currentPlayer === '0' ? "0" : "X")
        console.log('winner got')
    }

    if(checkDraw()){
        setDraw(true)
        
    }
},[turn,space])


    
// testing use effect
    const checkDraw = () => {
        let count=0;
        space.forEach((element) => {
            if(element !== ''){
               
                count++;

            }
        })

        if(count === 8){
            return true;
        }
        return false;
    }
  


    useEffect(()=>{

            setSpace(['','','','','','','','',''])
        // const boxs = boardRef.current.children;

        for(let i =0;i<=9;i++){
            
            // boxs[i].innerText = '';
            // setTurn('0');
            // setDraw(false)

        }

    },[draw,setDraw])
   

  return (
    
    <div className="main">
        <header className="header">
            <h2>Tic Tac Toe</h2>
        <div className="middle-container">
            {
                turn ==='0'? ( <h4>You</h4> ):null
            }
            <h3>Player 1</h3>
            {/* <button>Reset</button> */}
            <h3>Player 2</h3>
            {
                turn ==='X'? ( <h4>You</h4> ):null
            }
        </div>
        </header>
<div className="game_body" ref={boardRef}>

    <div className="board">
        <div className="cell b-1"id="1" onClick={(e) => drawTic(e,1)}></div>
        <div className="cell b-2" onClick={(e) => drawTic(e,2)}></div>
        <div className="cell b-3" onClick={(e) => drawTic(e,3)}></div>
        <div className="cell b-4" onClick={(e) => drawTic(e,4)}></div>
        <div className="cell b-5" onClick={(e) => drawTic(e,5)}></div>
        <div className="cell b-6" onClick={(e) => drawTic(e,6)}></div>
        <div className="cell b-7" onClick={(e) => drawTic(e,7)}></div>
        <div className="cell b-8" onClick={(e) => drawTic(e,8)}></div>
        <div className="cell b-9" onClick={(e) => drawTic(e,9)}></div>
    </div>



</div>

{
    draw ? <Modals draw={draw} message="The game is drawn "/>:null
}
{
    winner ? <Modals draw={winner} message="Is winned"/>:null
}

<div className="botton_container">

<button>Reset</button>
</div>
    </div>

  )
}

export default Board