import { useState } from "react";
import ContactRow from "./ContactRow.jsx";

function ContactList ({ contacts, setContacts }){

console.log('contacts: ', contacts);

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th colSpan='3'>
                        Contact List
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Phone
                    </th>
                </tr>
                {
                    contacts.map((contact) => {
                        return <ContactRow key={contact.id} contact={contact} setContacts={setContacts} />;
                    })
                }
            </tbody>
        </table>
        </>
    );
}

export default ContactList