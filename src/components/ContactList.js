import React from 'react';
import ContactCard from './Contactcard';
export default function ContactList(props) {
   console.log(props);

   const deleteContactHandler = (id) => {
    // console.log("aaa",id);
    props.getcontactId(id);
    
  };

    const renderContactList = props.contacts.map((contact) =>
    {  
        return(
               <ContactCard 
               contact={contact}
               clickHandler={deleteContactHandler}
              key={contact.id}
               ></ContactCard>
        );
    });
  return (
    <div className="ui celled list">
      {renderContactList}
    </div>
  )
} 
