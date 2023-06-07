import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux'
import { getdescription } from '../../redux/show'
import Loader from '../loader/Loader'
function Description() {
    const dispatch = useDispatch()

    const { id } = useParams()
    const { single, pending, img, summary } = useSelector((state) => state.ticket)
    console.log(single)
    // let img1 = single.show.image.original
    console.log(id)
    useEffect(() => {
        dispatch(getdescription(id))


    }, [])

    // let img2 = single.show.image.medium

    return (
        <>
            {pending ? <Loader></Loader> : <div style={{ position: "relative", height: "100vh" }}>
                <img src={img} className='w-100 h-100'></img>

                <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: "#000000eb", }}>
                    <div style={{ position: "absolute", width: "80%", height: "80%", left: "10%", top: "4%" }} className='d-flex  text-light gap-5 flex-wrap'>
                        <div className='w-50 h-50'><img src={img} className='w-100 h-100'></img></div>
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: summary }} />
                            <Link to={`/form/${id}`}>  <button className='btn btn-primary'>BOOK TICKET</button></Link>
                        </div>
                    </div>
                </div>


            </div>}</>

    )
}

export default Description
