import React from 'react'
import { useUserContext } from '../../../context/UserContext'

export default function Avatar() {
    const { state } = useUserContext();
    const userState = state.user;
    console.log('userState', userState);
    return (
        <img src={`${userState.pictures[0].path}`} alt="Image" />
    )
}
