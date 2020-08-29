import React from 'react';

const User = ({name, gen, email}) => {
    return (
        <div>
            <p>Name: {name} </p>
            <p>Gen: {gen}</p>
            <p>Email: {email} </p>
            <hr/>
        </div>
    );
}

export default User;
