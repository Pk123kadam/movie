import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchticket } from '../../redux/show'
import { useEffect } from 'react'
import Loader from '../loader/Loader'
import Display from './Display'

function DisplayData() {
    const dispatch = useDispatch()
    const { ticket, pending } = useSelector((state) => state.ticket)
    useEffect(() => {
        dispatch(fetchticket())

    }, [])
    return (
        <div className='container mt-4'>
            {pending ? <Loader></Loader> : <div className='row gy-4'>
                {ticket.map((e, i) => {
                    return <Display key={i} name={e.show.name} language={e.show.language} image={e.show.image.medium} rating={e.show.rating.average} imdb={e.show.externals.imdb} id={e.show.id}></Display>

                })}
            </div>}


        </div>
    )
}

export default DisplayData
