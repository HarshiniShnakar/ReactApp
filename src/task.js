import React, { useState } from "react";

function NameValidation() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const validateName = () => {
        try {
            setError('');
            setMessage('');

            if (name === 'Harshini') {
                setMessage("Valid UserName")
            } else {
                throw new Error("Invalid User");
            }
        } catch(e){
            setError(e.message);
        }
};

    return (
        <div style={{ maxWidth: '400px', margin: '50px', fontFamily: 'cursive' }}>
           <h2>User Name Validation</h2>

            <input
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
            />

            <button onClick={validateName} style={{ padding: '10px', width: '100%' }}>
                Validate Name
            </button>

            {message && <p style={{ color: 'green', marginTop: '15px' }}>{message}</p>}
            {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}
        </div>
    );
}
export default NameValidation;
