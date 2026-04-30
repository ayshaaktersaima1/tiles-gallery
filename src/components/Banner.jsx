import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url('/assets/banner.jpg')",
                }}
            >
                <div className="hero-overlay bg-black/60"></div>
                <div className="hero-content text-white text-center">
                    <div>
                        <h1 className="mb-5 text-5xl  font-bold">Crafting Spaces with Timeless Tiles</h1>
                        <div className='flex justify-center'>
                            <p className="mb-5 max-w-md">
                                Discover premium surfaces designed to transform interiors with elegance, texture, and lasting durability.
                            </p>
                        </div>
                        <Link href={'/all-tiles'}> <button className="btn bg-black text-white border-none shadow-black">Browse Collection</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;