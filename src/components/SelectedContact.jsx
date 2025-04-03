import { useEffect } from "react";
import HoverImage from "./HoverImage.jsx";

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
    <div className="name-hover-wrapper" style={{ position: 'relative' }}>
    <h1>
        <strong style={{ textDecoration: 'underline' }}>
            Current Selected Contact
        </strong>
    </h1>

    <p style={{ margin: 0 }}>
        <strong>Name:</strong>{' '}
        <span
        className="name-hover-trigger"
        style={{
            cursor: 'pointer',
            position: 'relative',
            display: 'inline-block',
        }}
    >
        {selectedContact.name}
        <HoverImage
            src="https://i.imgur.com/rGzqhiW.jpeg"
            alt={`Photo of ${selectedContact.name}`}
        />
        </span>
    </p>

    <p style={{ margin: '20px 0' }}>
    <strong>Email:</strong>{" "}
        <span
          onClick={() => {
            console.log("Clicked the email address");
          }}
          style={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          {selectedContact.email}
        </span>
    </p>

    <p style={{ margin: '20px 0' }}>
        <strong>Phone:</strong> {selectedContact.phone}
    </p>

    <button
        style={{ cursor: 'pointer', marginTop: '8px' }}
        onClick={() => setSelectedContact(null)}
    >
        Back to Contact List
    </button>
    </div>
    )
}

export default SelectedContact