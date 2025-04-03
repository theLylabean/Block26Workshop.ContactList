import { useEffect, useState } from 'react'
import './index.css'
import ContactList from './components/ContactList.jsx'
import SelectedContact from './components/SelectedContact.jsx';
import './index.css'

function App() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const getContacts = async () => {
      const res = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const info = await res.json();
      console.log(info);
      setContacts(info);
    }
    getContacts();
  }, []);

  // const selectedContactObj = contacts.find(contact => contact.id === selectedContact);

  return (
    <>
      <div id='contactsContainer'>
        {
          selectedContact
          ? <SelectedContact id='singleContact'
          selectedContact={selectedContact} 
          setSelectedContact={setSelectedContact}
          contact={contact}
          setContact={setContact}
            />
          : <ContactList id='contactList'
              contacts={contacts} 
              setContacts={setContacts} 
              selectedContact={selectedContact} 
              setSelectedContact={setSelectedContact} 
            />
        }
      </div>
    </>
  )
}

export default App
