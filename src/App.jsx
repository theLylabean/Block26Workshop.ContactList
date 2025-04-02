import { useState } from 'react'
import './index.css'
import ContactList from './components/ContactList.jsx'
function App() {
  // const [contacts, setContacts] = useState(dummyContacts)

  return (
    <>
      <div>
        <ContactList />
      </div>
    </>
  )
}

export default App
