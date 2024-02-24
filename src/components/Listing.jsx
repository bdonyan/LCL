import React from 'react';

const Listing = ({ price, storage, feature1, feature2, title }) => {
    return (
        <div className='w-full py-10 px-4 bg-gray-800'>
            <div className='max-w-3xl mx-auto'>
                <h2 className='text-3xl font-bold text-center text-white mb-8'>{title}</h2>
                <div className='flex flex-col items-center border border-gray-600 rounded-lg p-6 bg-gray-900'>
                    <p className='text-lg font-semibold text-white'>${price}</p>
                    <p className='mt-2 text-white'>{storage}</p>
                    <p className='mt-2 text-white'>{feature1}</p>
                    <p className='mt-2 text-white'>{feature2}</p>
                    <button className='mt-4 px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Download file</button>
                </div>
            </div>
        </div>
    );
};

export default Listing;
