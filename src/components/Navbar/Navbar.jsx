import React, { useState } from 'react'
import logo from '../../assets/Logo.png'

const Navbar = () => {
    let [show,setShow] = useState(false);
    let handleClick = ()=>{
        setShow(!show)
    }
    return (
        <div>

            <div className="bg-[#F40404] py-7 border-b-2 border-[#000] md:border-b-0">
                <div className=" max-w-container mx-auto items-center ">
                 <div className="flex justify-between">
                 <div className="w-1/4">
                        <img src={logo} alt="" />
                    </div>
                <div className="div">
                <div onClick={handleClick} className='md:hidden text-white pr-[20px]'>
                   {
                    show == true ?  <ion-icon name="close-circle-outline"></ion-icon> : <ion-icon name="apps-outline"></ion-icon>
                   }
                    </div>
                    <div className="md:w-3/4 ">
                       <div className={ `absolute md:static md:flex md:justify-end md:items-center gap-x-14 duration-300 ${show? 'top-[11rem] left-[100px]' : 'top-[-11rem] left-0'}`}>
                       <ul className="md:flex md:text-white font-pops text-base font-semibold gap-x-12">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Gallery</li>
                            <li>Blog</li>

                        </ul>
                        <button className="py-3.5 px-[30px] border-2 md:border-white md:text-white font-pops text-base font-semibold">CONTACT</button>
                       </div>
                    </div>
                </div>
                 </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar