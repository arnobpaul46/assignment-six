import React from 'react'
import ProductsCard from '../ProductsCard/ProductsCard'

const ShowCard = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center w-[80%] mx-auto mt-10'>
        <div className='flex flex-col justify-center items-center space-y-3'>
            <h1 className='text-5xl font-semibold'>Premium Digital Tools</h1>
            <p className='text-center text-gray-400'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            <div className='flex gap-2'>
                <button className='btn p-5 btn-primary rounded-2xl'>Products</button>
                <button className='btn rounded-2xl'>Cart(<span>0</span>)</button>
            </div>
        </div>

        <div className='grid grid-cols-3 gap-4'>
            <ProductsCard/>
            <ProductsCard/>
            <ProductsCard/>
        </div>
    </div>
    </>
  )
}

export default ShowCard