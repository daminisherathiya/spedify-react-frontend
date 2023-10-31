import React from 'react'
import { useUserContext } from '../../../context/UserContext'

export default function Avatar({ uri }) {
    const { state } = useUserContext();
    const userState = state.user;
    return (
        <img src={uri ? uri : `${userState.pictures[0].path}`} alt="Image" className='avatar-lg rounded-circle' />
    )
}
