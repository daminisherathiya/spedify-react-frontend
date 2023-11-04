import React from 'react'
import { useEnumsContext } from '../../../context/EnumsContext';

export default function UserRoles({ onChange = () => { } }) {
    const { enumsState } = useEnumsContext();
    const [userRoles, setUserRoles] = React.useState([]);
    React.useEffect(() => {
        if (enumsState.UserRoles) setUserRoles(enumsState.UserRoles.map((role, index) => ({ ...role, active: index === 0 })))
    }, [enumsState]);
    const enumSelection = (enumIndex) => {
        setUserRoles([...userRoles].map((en, j) => {
            if (j === enumIndex) {
                onChange(en.value)
                return { ...en, active: true }
            }
            return { ...en, active: false };
        }))
    }
    return (
        <nav className="user-tabs mb-4">
            <ul role="tablist" className="nav nav-pills nav-justified">
                {
                    (userRoles || []).map((role, index) => (
                        <li
                            key={`role-index-${index}`}
                            className={`nav-item nav-link ${role.active ? "active" : ''}`}
                            style={{ cursor: 'pointer' }}
                            onClick={() => enumSelection(index)}>
                            {role.text}
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
