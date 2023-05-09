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
                                    <h2 className='tile-h2'> Welcome To <span className='span-text'>React Template</span></h2>
                                    <p className='lead text-muted'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
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