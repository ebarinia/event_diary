import React, { useState } from 'react';
import 'schedulely/dist/index.css';
import { Schedulely } from 'schedulely';

const EventCalendar = () => {

  return (
    <div className='mt-10'>
      <Schedulely events={[]} />
    </div>
    )
}

export default EventCalendar;