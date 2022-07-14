import Modal from 'react-awesome-modal'
import React,{useState} from 'react'
const Modals = ({ draw,message,currentPlayer }) => {

    const [open,setopen] = useState(draw)
    return (
        
        <Modal 
        visible={open}
        effect="fadeInUp"
        onClickAway={() => setopen(!draw)}
        width="400"
        height="300"
        
        
        >
        <div className="modalss">

            <h1>{message}</h1>
            <h1>{draw}</h1>

            
            
        </div>
        </Modal>
    )
}

export default Modals
