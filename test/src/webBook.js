import { useEffect, useState } from "react";

import Calendar from "react-calendar";
export default function WebBooking() {
    const [availabileEvents, setAvailabileEvents] = useState([]);
    const [ formData, setFormData ] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        BookedEventId: '',
        BookedDate: '',
        BookedTime: ''
    })

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await fetch('http://localhost:3001/post/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Booking form submitted.");
            } else {
                console.error('Form submission failed');
              }

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    useEffect(() => {
        fetch('http://localhost:3001/get/availabile-events-web')
        .then(response => response.json())
        .then(data => {
            setAvailabileEvents(data);
            console.log(data);})
            .catch(error =>
                console.error(error))
    }, [])
    return(
        <div className="sect">

            <form 
            onSubmit={handleFormSubmit}
            className="booking-form">
                
            <input 
            id="FirstName"
            name="FirstName"
            type="text"
            value={formData.FirstName}
            onChange={handleFormChange} 
            placeholder="First Name" />

            <input 
            id="LastName"
            name="LastName"
            type="text" 
            value={formData.LastName}
            onChange={handleFormChange}
            placeholder="Last Name" />

             <input 
            id="Email"
            name="Email"
            type="email" 
            value={formData.Email}
            onChange={handleFormChange}
            placeholder="Email" />
           
                {availabileEvents.length > 0 ? ((
                        <select 
                        value={formData.BookedEventId}
                        onChange={handleFormChange}
                        name="events">

                    {availabileEvents.map((item) => (
                        <option 
                        value={item.evnt_id}> {item.evnt_title}</option>
                    ))}
                    
                    </select>
                )) : (
                    <p>loading...</p>
                )}
                <div className="calendar-container">
            <Calendar/>
            </div>
            <div className="time-pickers-container">

                <div className="time-picker-container">
                    <button></button>
                    <button></button>
                    <input type="number" />
                    </div>

                    <div className="time-picker-container">
                    <button></button>
                    <button></button>
                    <input type="number" />
                    </div>
            </div>
            <input type="submit"/>
            </form>
        </div>
    )
}