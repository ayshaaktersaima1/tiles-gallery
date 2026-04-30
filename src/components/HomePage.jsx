import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Banner from './Banner';
import Card from './Card';

const HomePage = async () => {

    const res = await fetch('https://tiles-gallery-xi.vercel.app/data.json');
    const data = await res.json();
    console.log(data);

    return (
        <div>
            <Banner></Banner>

            <div className='w-[90%] mx-auto'>
                <h1>Featured tiles</h1>
                <div className='grid grid-cols-4 gap-5 '>
                    {
                        data.slice(0, 4).map(tile => <Card key={tile.id} tile={tile}></Card>)
                    }
                </div>

                <Link href={'/all-tiles'}><button className='btn'>View All</button></Link>


            </div>
        </div>
    );
};

export default HomePage;