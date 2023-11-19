import React, { useState } from "react";
import { Modal, Button } from "antd";
import './CSS/contactcard.css';

import user from '../Image/user.png';

const CustomModalPrompt = ({ isOpen, onConfirm, onCancel }) => {
    return (
      <Modal
        title="Delete Prompt"
        visible={isOpen} // Use "visible" instead of "open"
        onOk={onConfirm}
        onCancel={onCancel}
        footer={[
          <Button key="cancel" onClick={onCancel}>
            Cancel
          </Button>,
          <Button key="confirm" type="primary" onClick={onConfirm}>
            Confirm
          </Button>,
        ]}
      >
        <p>Are you sure you want to delete?</p>
      </Modal>
    );
  };
  

const CardContact =(props)=>{
    const{id ,name, email,number} = props.contact;
    // console.log(id , "abs");

    const [isPromptOpen, setPromptOpen] = useState(false);

    const handleOpenPrompt = () => {
      setPromptOpen(true);
    };
  
    const handleConfirm = () => {
      // Perform actions when the user confirms
      props.clickHandler(id);
      setPromptOpen(false);
    };
  
    const handleCancel = () => {
      // Perform actions when the user cancels
      setPromptOpen(false);
    };


return(
    <div className='item'>
        <img className="ui avatar image" src={user} alt="user"></img>
    <div className='content'>
        <div className='header'>{name}</div>
            <div>{email}</div>
            <div>{number}</div>
    </div>
    <i className="trash alternate outline icon"
    onClick={()=> {handleOpenPrompt()}}
    ></i>

<CustomModalPrompt
          isOpen={isPromptOpen}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />

</div>
)
};
export default CardContact;