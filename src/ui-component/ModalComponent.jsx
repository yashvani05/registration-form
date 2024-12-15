import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


function ModalComponent({
    view,
    isOpen,
    setHandlePopup
}) {
    console.log("ModalComponent--", isOpen);

    let subtitle;

    // function afterOpenModal() {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }

    function closeModal() {
        setHandlePopup(!view);
    }

    return (
        <div>
            <Modal
                isOpen={isOpen}
                // onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                {view}
            </Modal>
        </div>
    );
}
export default ModalComponent