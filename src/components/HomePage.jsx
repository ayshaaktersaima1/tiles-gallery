import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Banner from './Banner';

const HomePage = async () => {

    const res = await fetch('https://tiles-gallery-xi.vercel.app/data.json');
    const data = await res.json();
    console.log(data);

    return (
        <div>
            <Banner></Banner>

            <div className='w-[90%] mx-auto'>
                <h1>Featured tiles</h1>
                <div>
                    {
                        data.slice(0, 3).map(tile => (<p key={tile.id}>{tile.title}</p>))
                    }
                </div>

                <Link href={'/all-tiles'}><button className='btn'>View All</button></Link>


            </div>
        </div>
    );
};

export default HomePage;