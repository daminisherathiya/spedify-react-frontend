import React from 'react'
import Select2 from "react-select2-wrapper";
import { useHistory } from "react-router-dom";
import { useEnumsContext } from '../../../context/EnumsContext';
import { useUserContext } from '../../../context/UserContext';

export default function Search() {
    const { enumsState } = useEnumsContext();
    const { state } = useUserContext();
    const history = useHistory();
    const query = React.useRef(null);
    query.current = { userType: 1 }
    const userRoles = enumsState.UserRoles || [];
    const eventclick = () => {
        const { userType = 1, queryStr = '' } = query.current;
        if (userType === 1) history.push(queryStr ? `/search/providers/?q=${queryStr}` : `/search/providers`)
        else history.push(queryStr ? `/search/work/?q=${queryStr}` : `/search/work`)
    };
    if (!state.isLoggedIn) return null;
    return (
        <form
            className="form"
            style={{ width: "105%" }}
        >
            <div className="form-inner">
                <div className="input-group">
                    <span className="drop-detail">
                        <Select2
                            className="select form-control"
                            data={userRoles}
                            options={{
                                placeholder: userRoles[0]?.text,
                            }}
                            onSelect={(e) => {
                                query.current = {
                                    ...query.current,
                                    userType: e.target.value
                                }
                            }}
                        />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="What are you looking for"
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
