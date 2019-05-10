import React, { Component } from 'react';
import './main.css'
class Main extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="part1">
                    <div className="logo">
                        <img className="logo1" src="https://www.docplanner.com/img/sygnet.png" alt="image" />
                    </div>
                    <p className="ph1">Making the healthcare experience more human</p>
                </div>
                <div className="phg">
                    <p className="phg1">We want patients to find the perfect doctor and book an appointment in the most easy way.
                        The patient journey should be enjoyable, and that's why we are always next to them: to help them find
                the best possible care. Anytime, anywhere.</p>
                    <p className="phg1">We also help doctors to better manage their practice and build their online reputation. With
                        our integrated end-to-end solution, doctors are able not only to improve their online presence, but also
                to devote their time to what really matters: their patients.</p>
                </div>
                <div className="patdoc">
                    <div className="back1">
                        <div className="patient"> <span>For patients</span></div>
                        <p className="pat">Find a doctor, book a visit and solve any health-related doubt</p>
                        <select name="selecty" className="btn1">
                            <option>CHOOSE COUNTRY</option>
                            <option >ARGENTINA</option>
                            <option >AUTRALIA</option>
                            <option >BRAZIL</option>
                            <option >CHILE</option>
                            <option >COLOMBIA</option>
                            <option>CZECH</option>
                            <option >FRANCE</option>
                            <option>ITALY</option>
                            <option >MEXICO</option>
                            <option >PERY</option>
                            <option >POLAND</option>
                            <option >SPAIN</option>
                            <option >TURKEY</option>
                            <option >UK</option>
                        </select>
                        <div className="waw">
                            <div className="img-relative-patient"></div>
                            <img className="img-patient" src="https://www.docplanner.com/img/screen-marketplace@2x.png" alt="image" />
                        </div>
                    </div>
                    <div className="back2">
                        <div className="doctor"> <span>For doctors</span> </div>
                        <p className="doct">Save time managing visits and cut no-shows by half</p>
                        <div className="img-relative-doctor">
                            <img className="img-doctor" src="https://www.docplanner.com/img/screen-saas@2x.png" alt="image" />
                        </div>
                    </div>

                </div>


                <div className="section3">
                    <div className="company">
                        <p>We are a global company with local culture</p>
                    </div>

                    <div className="docplanner">
                        <li className="itemes"><i class="fas fa-star-of-life">Znanylekarz</i> </li>
                        <li className="itemes"><i class="fas fa-star-of-life">Doctoralia</i> </li>
                        <li className="itemes"><i class="fas fa-star-of-life">MioDottore</i> </li>
                        <li className="itemes"><i class="fas fa-star-of-life">DoctorTakvimi</i> </li>
                        <li className="itemes"><i class="fas fa-star-of-life">ZnamyLekar</i> </li>
                    </div>

                </div>

                <div className="world">
                    <div className="div4">
                        <div className="div4">
                            <div className="div4-1">
                                <p className="p4">The world's biggest healthcare platform</p>
                                <p className="p4-2">We work from 6 offices all over the world, bringing Docplanner Group to life in
                            almost 20 countries.</p>
                            </div>
                            <div className="div4-2">
                                <img className="img-div4-2"
                                    src="https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/jcmy9zzlqh682l0my9p3"
                                    alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="prodact">
                        <div className="prodact1-2">
                            <div className="prodact1">
                                <img className="img-prodact1" src="https://www.docplanner.com/img/flag.png" alt="image" />
                                <p className="leader">Leader in 10 <br /> countries</p>
                                <p className="poland">Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia,
                            Argentina and Chile</p>
                            </div>

                            <div className="prodact2">
                                <img className="img-prodact2" src="https://www.docplanner.com/img/visits.png" alt="image" />
                                <p className="million">1 million <br /> appointments</p>
                                <p className="booked">booked last month</p>
                            </div>
                        </div>

                        <div className="prodact3-4">
                            <div className="prodact3">
                                <img className="img-prodact3" src="https://www.docplanner.com/img/patients.png" alt="image" />
                                <p className="million30">30 million unique <br /> patients</p>
                                <p className="visitus">visit us every month</p>
                            </div>

                            <div className="prodact4">
                                <img className="img-prodact4" src="https://www.docplanner.com/img/doctors.png" alt="image" />
                                <p className="million2">2 million active <br /> doctors</p>
                                <p className="trust">trust in our solutions</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="lives">
                        <p className="p-lives1">Improve the lives of millions.<br /> Change yours forever</p>
                        <p className="p-lives2">More than 1000 team mates share our same vision, goals and passion. With offices in
                            Warsaw, Barcelona, Istanbul, Rome, Czech Republic, Mexico City, Colombia and Curitiba, our search
                    for great talent never stops.</p>
                    </div>
                </div>

                <div className="div1-2-3">
                    <div className="div1">
                        <div className="photos">
                            <img src="https://www.docplanner.com/images/warsaw.png" alt="image" />
                            <div className="pays">
                                <p>Warsam</p>
                                <button>SEE OPENINGS</button>
                            </div>
                        </div>


                        <div className="photos">
                            <img src="https://www.docplanner.com/images/rome.png" alt="image" />
                            <div className="pays">
                                <p>Rome</p>
                                <button>SEE OPENINGS</button>
                            </div>
                        </div>
                    </div>

                    <div className="div1">
                        <div className="photos">
                            <img src="https://www.docplanner.com/images/barcelona.png" alt="image" />
                            <div className="pays">
                                <p>Barcelona</p>
                                <button>SEE OPENINGS</button>
                            </div>
                        </div>

                        <div className="photos">
                            <img src="https://www.docplanner.com/images/mexico-city.png" alt="image" />
                            <div className="pays">
                                <p>Mexico City</p>
                                <button>SEE OPENINGS</button>
                            </div>
                        </div>
                    </div>

                    <div className="div1">
                        <div className="photos">
                            <img src="https://www.docplanner.com/images/istanbul.png" alt="image" />
                            <div className="pays">
                                <p>Istanbul</p>
                                <button>SEE OPENINGS</button>
                            </div>
                        </div>

                        <div className="photos">
                            <img src="https://www.docplanner.com/images/curitiba.png" alt="image" />
                            <div className="pays">
                                <p>Curitiba</p>
                                <button>SEE OPENINGS</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div >);
    }
}

export default Main;