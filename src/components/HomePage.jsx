import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Banner from './Banner';
import Card from './Card';
import ScrollingText from './ScrollingText';


const HomePage = async () => {

    const res = await fetch('https://tiles-gallery-xi.vercel.app/data.json');
    // const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    console.log(data);

    return (
        <div>
            <Banner></Banner>
            <div>
                <ScrollingText></ScrollingText>
            </div>

            <div className='w-[90%] mx-auto'>
                <h1 className='text-3xl md:text-5xl text-center font-bold mt-10 md:mt-20 mb-5 md:mb-10'>Featured Tiles</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                    {
                        data.slice(0, 4).map(tile => <Card key={tile.id} tile={tile}></Card>)
                    }
                </div>

                <div className='flex justify-center'>
                    <Link href={'/all-tiles'}><button className='btn bg-black text-white rounded-none my-10'>View All</button></Link>
                </div>


            </div>
        </div>
    );
};

export default HomePage;