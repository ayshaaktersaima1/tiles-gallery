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
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Crafting Spaces with Timeless Tiles</h1>
                        <p className="mb-5">
                            Discover premium surfaces designed to transform interiors with elegance, texture, and lasting durability.
                        </p>
                        <Link href={'/all-tiles'}> <button className="btn bg-black text-white border-none">Browse Collection</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;