import React from 'react'
import { Link } from 'react-router-dom'


function Display({ name, language, image, rating, id }) {

    return (


        <>
            <div className='col-lg-4 col-md-6 col-12'>
                <div className='border p-3 d-flex flex-column align-items-center bg-dark text-light rounded-3'>
                    <div><img src={image} className='rounded'></img></div>
                    <h1>{name}</h1>
                    <p>{language}</p>
                    <p><i class="bi bi-star-fill"></i> {rating ? rating : "not available"}/10</p>
                    <div ><Link to={`/description/${id}`}><button className='btn btn-primary'>Show More</button></Link></div>

                </div>
            </div>

        </>



    )
}

export default Display
