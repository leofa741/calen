
import Modal from 'react-modal'
import { useState } from 'react'
import './Modal.css'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

export const CalendarModal = () => {



    const [isOpen, setIsOpen] = useState(true);
    const closeModal = () => {

        setIsOpen(false)
    }

  return (
    <Modal
        isOpen={isOpen}     
   
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        className="modal"
        overlayClassName="modal-fondo"
       

    >
<h1>hola modal</h1>
<hr></hr>
<button onClick={closeModal}>close</button>



    </Modal>
  )
}
