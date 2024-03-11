import React from 'react'
import Img1 from "../assets/1.png"
import Img2 from "../assets/2.png"
import Img3 from "../assets/3.png"
import Img4 from "../assets/4.png"
import Img5 from "../assets/5.png"
import Img6 from "../assets/6.png"

const Clients = () => {
    return (
        <div className='flex md:gap-3 gap-1 md:flex-row flex-col flex-wrap justify-center'>
            <img src={Img1} className='grayscale img' />
            <img src={Img2} className='grayscale img' />
            <img src={Img3} className='grayscale img' />
            <img src={Img4} className='grayscale img' />
            <img src={Img5} className='grayscale img' />
            <img src={Img6} className='grayscale img' />
        </div>
    )
}

export default Clients