import React from 'react'

const Home = () => {
    return (
        <>
            <section className='section_height'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-10'>
                            <div className='row d-flex justify-content-around'>
                                <div className='col-lg-4 hero_img'>
                                    <img src='./assets/img/heroSection.png' alt='hero' className='img-fluid' />
                                </div>
                                <div className='col-lg-4 mt-5'>
                                    <h2 className='tile-h2 fs-2'> Welcome To <span className='span-text'>React Template</span></h2>
                                    <p className='fs-6 text-muted'>We Are The Team Of Talented Website Designer </p>
                                    <button className='btn btn-warning text-center text-white btn-lg'>With Us</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </section>
        </>
    )
}

export default Home