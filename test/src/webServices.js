import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function WebServices() {

    const [ fetchedServices, setFetchedServices ] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3001/get/availabile-events-web')
  .then(response => response.json())
  .then(data => {
    setFetchedServices(data);
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  console.log(fetchedServices);

    },
    []);

    return(
        <div className="sect">

          <div className="services-container">

{fetchedServices.length > 0 ? (
                fetchedServices.map((item) => (
                    <div className="service-card" key={item.evnt_id}>
                        <h3>{item.evnt_title}</h3>
                        <p>{item.evnt_description}</p>

                        <div className="buttons-container">
                        <Link to={`/event/${item.evnt_id}`}> see more...</Link>
                        
                        <div className="button">
                            <Link to={`/booking/${item.evnt_id}`}>Book Now!</Link>
                        </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
            </div>
        </div>
    )
}