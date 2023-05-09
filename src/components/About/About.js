import React from 'react'

const About = () => {
    return (
        <>
            <section className='section_height'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-10'>
                            <div className='row d-flex justify-content-around align-items-center'>
                                <div className='col-lg-4'>
                                    <h2>About Us</h2>
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