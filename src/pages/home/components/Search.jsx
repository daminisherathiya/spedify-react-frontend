import React from 'react'
import Select2 from "react-select2-wrapper";
import { useHistory } from "react-router-dom";
import { useEnumsContext } from '../../../context/EnumsContext';
import { useUserContext } from '../../../context/UserContext';

export default function Search() {
    const { enumsState } = useEnumsContext();
    const { state } = useUserContext();
    if (!state.isLoggedIn) return null;
    const userRoles = enumsState.UserRoles || [];
    const history = useHistory();
    const query = React.useRef(null);
    query.current = { queryStr: '' }
    const eventclick = () => {
        const { queryStr = '' } = query.current;
        if (state.user.userType === 2) history.push(queryStr ? `/search/providers/?q=${queryStr}` : `/search/providers`)
        else history.push(queryStr ? `/search/work/?q=${queryStr}` : `/search/work`)
    };
    return (
        <form
            className="form"
        >
            <div className="form-inner">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder={`Search for the best ${userRoles.find(x => x.value !== state.user.userType).text}`}
                        onChange={e => {
                            query.current = {
                                ...query.current,
                                queryStr: e.target.value
                            }
                        }}
                    />
                    <button
                        type="button"
                        className="btn btn-primary sub-btn"
                        onClick={eventclick}
                    >
                        Search Now
                    </button>
                </div>
            </div>
        </form>
    )
}
