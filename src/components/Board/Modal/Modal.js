import Modal from 'react-awesome-modal'
import React,{useState} from 'react'
const Modals = ({ draw,message,currentPlayer }) => {

    const [open,setopen] = useState(draw)
    return (
        <div className="modalss">

        <Modal 
        visible={open}
        effect="fadeInUp"
        onClickAway={() => setopen(!draw)}
        width="400"
        height="300"
        
        
        >

            <h1>{draw}{message}</h1>

            <button>Restart</button>
            
        </Modal>
        </div>
    )
}

export default Modals
