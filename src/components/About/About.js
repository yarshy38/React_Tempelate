import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <>
            <section className='section_height'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-10'>
                            <div className='row d-flex justify-content-around align-items-center'>
                                <div className='col-lg-4'>
                                    <h2 className='fw-bold  fs-1'>Welcome to About us <br />
                                        <span className='span-text'>React Template</span></h2>
                                    <p className='text-muted'>It's that amazing content that is significant to making inbound marketing work for your business. </p>
                                    <NavLink className='btn btn-primary' to='/contact'>Contact Now</NavLink>
                                </div>
                                <div className='col-lg-4'>
                                    <img src='./assets/img/boyUsingLaptop.png' alt='about us' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About