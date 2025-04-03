function ContactRow ({ contact, setSelectedContact }){
    return (
        <tr className='highlight'
        onClick={() => {
            setSelectedContact(contact.id);
        }}
        >
            <td className='name'>
                {contact.name}
            </td>
            <td className='email'>
                {contact.email}
            </td>
            <td className='phone'>
                {contact.phone}
            </td>
        </tr>
    );
}

export default ContactRow