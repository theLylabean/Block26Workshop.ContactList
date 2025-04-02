import { useEffect, useState } from 'react'
import './index.css'
import ContactList from './components/ContactList.jsx'
function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const res = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
      const info = await res.json();
      console.log(info);
      setContacts(info);
    }
    getContacts();
  }, []);

  return (
    <>
      <div>
        <ContactList contacts={contacts} setContacts={setContacts} />
      </div>
    </>
  )
}

export default App
