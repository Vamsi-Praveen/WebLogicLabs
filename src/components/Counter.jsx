import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
const Counter = ({ name, number }) => {
    const [trigger, setTrigger] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setTrigger(true)} onExit={() => setTrigger(false)}>
            {
                trigger &&
                <div className='flex flex-col items-center'>
                    <div >
                        <CountUp className='text-3xl font-bold' start={0} end={number} duration={3} delay={0.2} />&nbsp;<sup className='text-2xl'>+</sup></div>
                    <h1 className='text-sm'>{name}</h1>
                </div>
            }
        </ScrollTrigger>
    )
}

export default Counter