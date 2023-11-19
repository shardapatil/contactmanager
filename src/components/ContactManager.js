import React, { useState ,useEffect } from "react";
import { v4 as uuid } from 'uuid';
import Header from './Header';
import AddContact from './Addcontact';
import ContactList from './ContactList';
import './CSS/App.css';
function ContactManager() {
//render a list 
    //const contacts =
    //[
    //   {
    //   id:"1",
    //   "name":"Nikhil",
    //   "email":"Nikhil@gmail.com",
    //   },
    //   {
    //     id:"2",
    //     "name":"Aman",
    //     "email":"Aman@gmail.com",
    //     }
    // ];

  //key for local storage
  const Local_Storage_Key ="contacts";

    //Making use of hook 
    const [contacts, setContacts] = useState(
      JSON.parse(localStorage.getItem(Local_Storage_Key)) ?? []
    );
  
    //contact from child
    const addcontactHandler =(contact)=>{   
      
      setContacts([...contacts,{id:uuid(),...contact} ]);
      // console.log(contacts);
    };

    const removecontactHandler =(id)=>
    {
      console.log(id);
      const newcontactList = contacts.filter((contact)=>
      {
        return contact.id !== id
      });

      setContacts(newcontactList);
    }
    
//retrieve
// useEffect(()=>
//     {
//       const retrievecontacts= JSON.parse(localStorage.getItem(Local_Storage_Key ));
//       // console.log(Local_Storage_Key);
//       if(retrievecontacts) setContacts(retrievecontacts);
//     },[]); 

    
 

// Persist data using local storage / to render component whenever value changes 
// useEffect(<function>, <dependency>)
    useEffect(()=>
    {
      localStorage.setItem(Local_Storage_Key, JSON.stringify(contacts));
      // console.log(Local_Storage_Key);
      console.log('Initial data stored:', contacts);
    },[contacts]);   //[contacts] - dependency
  return (
  
     <div className="ui container">
      
    <Header />
     <AddContact addcontactHandler ={addcontactHandler}  />
    <ContactList contacts={contacts} getcontactId={removecontactHandler}/> 
   </div>
  );
}
export default ContactManager;







