import Image from 'next/image';
import React from 'react';

const TileDetails = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('https://tiles-gallery-xi.vercel.app/data.json');
    const data = await res.json();
    const card = data.find(c => c.id == id);



    return (
        <div className='w-[90%] mx-auto my-10 md:my-20'>
            <div className="card lg:card-side bg-base-100 flex flex-col  md:flex-row justify-center items-stretch gap-2 md:gap-10">
                <figure className='w-full md:w-1/2 relative aspect-square overflow-hidden'>
                    <Image src={card.image} fill alt='tile image' className='w-full h-full object-cover'></Image>
                </figure>
                <div className="card-body w-full md:w-1/2">
                    <h2 className="card-title text-2xl md:text-4xl">{card.title}</h2>
                    <div className='space-y-2 text-base my-4 md:text-lg'>
                        <p><span className='font-semibold'>Price:</span> ${card.price}</p>
                        <p className='capitalize'><span className='font-semibold'>Category:</span> {card.category}</p>
                        <p className='capitalize'><span className='font-semibold'>Material:</span> {card.material}</p>
                        <p><span className='font-semibold'>Size:</span> {card.dimensions}</p>
                        <p><span className='font-semibold'>Availability:</span> {card.inStock === true ? 'In Stock' : 'Out of Stock'}</p>
                    </div>
                    <div className='pb-10'>
                        <p className='text-base md:text-lg pb-5'><span className='font-semibold'>Description:</span> <br />{card.description}</p>

                        <p className='text-base md:text-lg flex gap-3 md:gap-5'>
                            {card.tags.map((tag, index) => <span className='badge text-base bg-base-300' key={index}>{tag}</span>)}
                        </p>
                    </div>

                    <div className="card-actions justify-start">
                        <button className="btn bg-black text-white rounded-none w-full">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TileDetails;