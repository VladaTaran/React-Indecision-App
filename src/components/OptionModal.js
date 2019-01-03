import React from  'react';
import Modal from 'react-modal';

const OptionModal = (props) =>  (
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleClearSelectedOption}
        contentLabel = "Selected option"
        closeTimeoutMS={200}
        className="modal"
    >
    <h5 className="modal__title">Selected option</h5>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick = {props.handleClearSelectedOption} >Ok</button>
    </Modal>
); 

export default OptionModal;