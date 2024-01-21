import React from 'react';
import { useState } from 'react';

import { createCalendar } from './__funcs__/funcGenel';



export default function WebAbout() {
    const [ calendarBaseDate, setCalendarBaseDate ] = useState();
    const [pickedDate, setPickedDate] = useState('');

    const calendarDates = createCalendar();
    const today = new Date();

    const handleDatePicking = (e) => {
        console.log(e.target);
        setPickedDate(e.target);
    }

    return (
        <div className='sect'>

            <div className='calendar-container'>
                <div className='month-container'>
                    <button>p</button>
                    <p>year month</p>
                    <button>n</button>
                </div>

                <div className='days-container'>
                    <p>mon</p>
                    <p>tue</p>
                    <p>wed</p>
                    <p>thu</p>
                    <p>fri</p>
                    <p>sat</p>
                    <p>sun</p>
                </div>

                <div className='dates-container'>

                    {calendarDates.map((date) => {
                        const isDisabled = date < today;
                        const isDimmed = date.getMonth() !== today.getMonth();
                        return (
                            <button
                            key={date.toISOString}
                            className={isDimmed ? 'dimmed' : ''}
                            disabled={isDisabled}
                                value={date}
                                onClick={handleDatePicking}>{date.getDate()}</button>
                        )
                    }

                    )}

                </div>
                <p>{pickedDate.value}</p>
            </div>
        </div>
    )
}