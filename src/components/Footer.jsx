import React from 'react'
import location from '../assets/marker.svg'
import phone from '../assets/mobile-button.svg'
import logo from "../assets/logo.png"


const Footer = () => {
    return (
        <footer className='w-full py-4 px-[3%] bg-[#98f1bc] flex items-center gap-5 flex-col'>
            <div className='flex md:items-center justify-between w-full md:flex-row flex-col md:gap-0 gap-3'>
                {/* <h1 className='font-bold text-xl'>WebLogicLabs.</h1> */}
                <img src={logo} width={220} />
                {/* <h1 className='font-semibold'>&copy;&nbsp;Copyright&nbsp;{new Date().getFullYear()}</h1> */}
                <div className='flex w-[300px] flex-col gap-3'>
                    <div className='flex gap-2 items-center'>
                        <img src={location} height={24} width={24} />
                        <h1>1st Floor, Himayat Nagar Rd,  opp. Kubera Towers,  Hyderabad, Telangana 500029</h1>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <img src={phone} height={24} width={24} />
                        <h1>7880015040</h1>
                    </div>
                </div>
            </div>
            <h1 className='font-semibold'>&copy;&nbsp;Copyright&nbsp;{new Date().getFullYear()}</h1>


        </footer>
    )
}

export default Footer