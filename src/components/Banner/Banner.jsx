import React from 'react'

const Banner = () => {
    return (
        <div>

            <div className="bg-banner pt-[70px] pb-[90px]  md:pt-[257px] md:pb-[258px] bg-no-repeat bg-cover bg-center relative after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-[rgba(0,0,0,0.6)] after:z-[-1] z-[1] pl-[20px] md:pl-0">
                <div className="max-w-container mx-auto z-40">
                    <h1 className="text-white font-pops text-[22px] md:text-[64px] font-bold md:w-[842px]">We exist since 1975 on the oil and gas industry.</h1>
                    <button className="py-3.5 px-[40px]  bg-[#F40404] text-white font-pops text-base font-semibold mt-[20px] md:mt-[44px]">LEARN MORE</button>
                </div>
            </div>

        </div>
    )
}

export default Banner