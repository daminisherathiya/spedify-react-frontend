import React from 'react';

export const Alert = ({message}) => {
    return <div className='m-3 alert alert-danger' role='alert'>
        {message}
    </div>
};
