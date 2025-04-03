import { useEffect } from "react";

function SelectedContact ({ selectedContact, setSelectedContact }){
    useEffect(() => {
        const renderSingleContact = async () => {
          const res = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContact}`);
          const info = await res.json();
          console.log(info);
          setSelectedContact(info);
        }
        renderSingleContact();
      }, []);

    return (
        <div>
        <h1>
            <strong style={{
                textDecoration: 'underline',
            }}>
                Current Selected Contact
            </strong>
        </h1>
            <p>
                <strong>Name:</strong> {selectedContact.name}
            </p>
            <p>
                <strong>Email:</strong>{' '} 
                <span onClick={() => {
                    console.log('Clicked the email address');
                }}
                
                     style={{
                        cursor: 'pointer',
                        textDecoration: 'underline',
                }}
                >
                    {selectedContact.email}
                </span>
            </p>
            <p>
                <strong>Phone:</strong> {selectedContact.phone}
            </p>
            <button style={{
                cursor: 'pointer'
            }}
            onClick={() => setSelectedContact(null)}>
              Back to Contact List
            </button>
        </div>
    )
}

export default SelectedContact