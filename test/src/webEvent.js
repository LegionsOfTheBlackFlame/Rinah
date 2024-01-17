
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function WebEvent() {
    const [ eventData, setEventData ] = useState(null);
    const { eventId } = useParams();

    useEffect(
        () => {
            fetch(`http://localhost:3001/get/singleeventtorender/${eventId}`)
            .then( response => response.json() )
            .then( (data) => {
                setEventData(data);
                console.log("fetched selected event: ", eventData);
            })
            .catch( error => {
                console.log("Error occured fetching data: ", error);
            })
            
        },
        []
    );

    return(
        <div className='sect'>

        {eventData !== null ? (
            eventData.map((thisEvent) => (
            <div >
                <h1>{thisEvent.evnt_title}</h1>
                <p>{thisEvent.evnt_description}</p>
            </div>))
        ) : (
            <p>loading...</p>
        )}
    



        </div>
    )
}