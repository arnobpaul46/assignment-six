import React from 'react'
import HeroImg from "../../assets/banner.png"
import playImg from "../../assets/play.png"
import circleImg from "../../assets/Group 5.png"
const HomePage = () => {
    return (
        <>

            <div className="hero  w-[80%] mx-auto md:mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <img
                        src={HeroImg}
                        className="max-w-sm rounded-lg shadow-2xl "
                        />
                    <div className='md:w-[45%] '>
                        <p className='flex gap-2 items-center bg-gray-900 px-3 py-2 rounded-2xl w-75'><img className='w-5 h-5' src={circleImg} alt="" />New: AI-Powered Tools Available</p>
                        <h1 className="mt-5 text-4xl md:text-6xl font-bold text-start">Supercharge Your Digital Workflow</h1>
                        <p className="text-sm py-6 w-[80%]">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.

                            Explore Products
                        </p>
                        <div className="space-x-3">
                            <button className="btn btn-primary rounded-2xl">Explore Products</button>
                            <button className="btn btn-outline rounded-2xl"><img src={playImg} alt="" /> Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage