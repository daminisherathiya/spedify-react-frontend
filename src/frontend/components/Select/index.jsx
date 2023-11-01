import React from 'react'

export default ({ label = '', id = '', onChange = () => { }, options = [], defaultValue = "" }) => {
    return (
        <div className="form-group col-md-6">
            <label>{label}</label>
            <select onChange={onChange} id={id} className="form-control select" defaultValue={defaultValue}>
                {
                    options.map((option, index) => {
                        return <option key={`option-key-${index}`} value={option.value}>{option.text}</option>
                    })
                }
            </select>
        </div>
    )
}
