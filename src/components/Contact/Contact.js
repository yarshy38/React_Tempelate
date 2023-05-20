import React, { useState } from 'react'

const Contact = () => {
    const [data, setData] = useState({
        phone: '',
        email: '',
        msg: '',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal, [name]: value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.phone} is my number and my email is ${data.email} and my msg is ${data.msg}`)
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                        <form onSubmit={formSubmit}>
                            <div class="form-group mt-3">
                                <label for="exampleInputEmail1 mt-1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={data.email} onChange={InputEvent} placeholder="Enter email" />
                            </div>
                            <div class="form-group mt-3">
                                <label for="exampleInputEmail1 mt-1">Phone Number</label>
                                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='phone' value={data.phone} onChange={InputEvent} placeholder="Enter Mobile No." />
                            </div>

                            <div class="form-group mt-3">
                                <label for="exampleInputEmail1 mt-1">Enter Your Message</label>
                                <textarea type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='msg' value={data.msg} onChange={InputEvent} placeholder="Enter Message" rows='3' />
                            </div>
                            <button type="submit" class="mt-3 btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact