import React from  'react';
import Modal from 'react-modal';

const OptionModal = (props) =>  (
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleClearSelectedOption}
        contentLabel = "Selected option"
    >
    <h5>Selected option</h5>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick = {props.handleClearSelectedOption} >Ok</button>
    </Modal>
); 

export default OptionModal;