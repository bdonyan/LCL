import React from 'react';
import Listing from '../components/Listing';

export default function LabelHub({ data }) {
    return (
        // return <h1 className='text-white'>Hello World</h1>
        <div className='w-full py-[10rem] px-4 bg-black'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                {data.map((item, index) => (
                    <Listing
                        key={index}
                        price={item.price}
                        storage={item.storage}
                        feature1={item.feature1}
                        feature2={item.feature2}
                        title ={item.title}
                    />
                ))}
            </div>
        </div>
    );
}