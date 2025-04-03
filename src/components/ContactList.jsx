import ContactRow from "./ContactRow.jsx";

function ContactList ({ contacts, setContacts, selectedContact, setSelectedContact, setContact }){

console.log('contacts: ', contacts);

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th className='header' colSpan='3'>
                        <u>Contact List</u>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th id='secondHeader'>
                        Name
                    </th>
                    <th id='secondHeader'>
                        Email
                    </th>
                    <th id='secondHeader'>
                        Phone
                    </th>
                </tr>
                {
                    contacts.map((contact) => {
                        return <ContactRow key={contact.id} contact={contact} setContacts={setContacts} selectedContact={selectedContact} setSelectedContact={setSelectedContact} setContact={setContact} />;
                    })
                }
            </tbody>
        </table>
        </>
    );
}

export default ContactList