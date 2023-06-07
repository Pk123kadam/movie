import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getdescription } from '../../redux/show'
import { useParams } from 'react-router-dom'
import Loader from '../loader/Loader'

function Form() {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { time, language, name, pending } = useSelector((state) => state.ticket)

    // const [data, setdata] = useState({ time, days, name })
    useEffect(() => {
        dispatch(getdescription(id))


    }, [])
    function handlesubmit(e) {
        e.preventDefault()
        alert("submitted")
    }

    return (
        <>
            {pending ? <Loader></Loader> : <div className='w-50 mx-auto p-5'>
                <form onSubmit={handlesubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">
                            Movie Title</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Time</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" value={time} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Language</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" value={language} />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>}</>

    )
}

export default Form
