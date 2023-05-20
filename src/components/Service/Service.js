import React from 'react'
import Sdata from './Sdata'
import Card from './Card'

const Service = () => {
    return (
        <>
            <div>
                <h1 className='text-center pb-4'>Our Services</h1>
            </div>
            <div className='container pb-4'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4 d-flex justify-content-around'>
                            {
                                Sdata.map((val, ind) => {
                                    return <Card key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Service