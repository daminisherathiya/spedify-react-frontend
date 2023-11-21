import React from 'react'

export default function Price({ pricingType = 1, onChange = () => { } }) {
    return (
        <div className="title-content col-md-4">
            <div className="title-detail">
                <h3>Price</h3>
                {pricingType == 2 ?
                    <div className='row'>
                        <div className="input-group col-md-6">
                            <input
                                type="text"
                                className="form-control mr-2"
                                placeholder={`min-$50`}
                                id="hourlyMin"
                                onChange={onChange}
                            />
                        </div>
                        <div className="input-group col-md-6">
                            <input
                                type="text"
                                className="form-control mr-2"
                                placeholder={`max-$100`}
                                id="hourlyMax"
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    :
                    <div className="input-group col-md-12">
                        <input
                            type="text"
                            className="form-control mr-2"
                            placeholder={`${pricingType == 1 ? '$50' : '$0'}`}
                            id="fixedPrice"
                            onChange={onChange}
                        />
                    </div>
                }

            </div>
        </div>
    )
}
