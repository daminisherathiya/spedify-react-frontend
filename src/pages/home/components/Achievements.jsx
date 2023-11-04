import React from 'react'
import CountUp from "react-countup";
import {
    Icon_07,
    Icon_04,
    Icon_05,
    Icon_06,

} from "../../../components/imagepath";

export default function Achievements() {
    return (
        <section className="section feature-count">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 mx-auto">
                        <div
                            className="section-header feature-count-head aos"
                            data-aos="fade-up"
                        >
                            <h2 className="header-title">Spedify Acheivements</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div
                            className="feature-item freelance-count aos"
                            data-aos="fade-up"
                        >
                            <div className="feature-icon ">
                                <img src={Icon_07} className="img-fluid" alt="" />
                            </div>
                            <div className="feature-content course-count">
                                <h3>
                                    <span className="counter-up">
                                        <CountUp end={9207} duration={10} />
                                    </span>
                                </h3>
                                <p>Freelance developers</p>
                            </div>
                        </div>
                    </div>
                    {/* /Feature Item */}
                    {/* Feature Item */}
                    <div className="col-xl-3 col-md-6">
                        <div className="feature-item aos" data-aos="fade-up">
                            <div className="feature-icon">
                                <img src={Icon_04} className="img-fluid" alt="" />
                            </div>
                            <div className="feature-content course-count">
                                <h3>
                                    <span className="counter-up">
                                        <CountUp end={6000} duration={10} />
                                    </span>
                                    <span>+</span>
                                </h3>
                                <p>Projects Added</p>
                            </div>
                        </div>
                    </div>
                    {/* /Feature Item */}
                    {/* Feature Item */}
                    <div className="col-xl-3 col-md-6">
                        <div
                            className="feature-item comp-project aos"
                            data-aos="fade-up"
                        >
                            <div className="feature-icon">
                                <img src={Icon_05} className="img-fluid" alt="" />
                            </div>
                            <div className="feature-content course-count">
                                <h3>
                                    <span className="counter-up">
                                        <CountUp end={919207} duration={10} />
                                    </span>
                                </h3>
                                <p>Completed projects</p>
                            </div>
                        </div>
                    </div>
                    {/* /Feature Item */}
                    {/* Feature Item */}
                    <div className="col-xl-3 col-md-6">
                        <div
                            className="feature-item comp-project aos"
                            data-aos="fade-up"
                        >
                            <div className="feature-icon">
                                <img src={Icon_06} className="img-fluid" alt="" />
                            </div>
                            <div className="feature-content course-count">
                                <h3 className="counter-up">
                                    <span>
                                        <CountUp end={998} duration={10} />
                                    </span>
                                </h3>
                                <p>Companies Registered</p>
                            </div>
                        </div>
                    </div>
                    {/* /Feature Item */}
                </div>
            </div>
        </section>
    )
}
