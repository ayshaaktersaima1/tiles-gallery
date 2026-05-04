import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Banner from './Banner';
import Card from './Card';
import ScrollingText from './ScrollingText';
import { SiTicktick } from 'react-icons/si';


const HomePage = async () => {

    const res = await fetch('https://tiles-gallery-xi.vercel.app/data.json');

    const data = await res.json();


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


            <div className='w-[90%] mx-auto'>
                <h1 className='text-3xl md:text-5xl text-center font-bold mt-10 md:mt-15 mb-5 md:mb-10'>Why Choose Us</h1>

                <div className='bg-base-200 rounded-sm p-5 md:p-10 mb-10 md:mb-20'>

                    <div className='flex flex-col md:flex-row justify-between items-start gap-5 md:gap-12'>
                        <div className='flex-1 space-y-5 md:space-y-10'>
                            <div className='flex justify-center items-center gap-5 md:gap-7'>
                                <span><SiTicktick size={40} /></span>
                                <p className='text-base md:text-lg'>Each tile is selected with attention to quality and durability, ensuring designs that are practical and visually appealing for everyday use.</p>
                            </div>
                            <div className='flex justify-center items-center gap-5 md:gap-7'>
                                <span><SiTicktick size={40} /></span>
                                <p className='text-base md:text-lg'>The collection includes a balanced mix of simple, modern, and decorative styles, giving users enough variety to explore comfortably.</p>
                            </div>

                        </div>
                        {/* right side */}
                        <div className='flex-1 space-y-5 md:space-y-10'>
                            <div className='flex justify-center items-center gap-5 md:gap-7'>
                                <span><SiTicktick size={40} /></span>
                                <p className='text-base md:text-lg'>The search and filtering system is designed to help users quickly find tiles that match their preferences without any confusion.</p>
                            </div>
                            <div className='flex justify-center items-center gap-5 md:gap-7'>
                                <span><SiTicktick size={40} /></span>
                                <p className='text-base md:text-lg'>The gallery reflects current design trends, helping users discover fresh and modern tile ideas for different interior spaces.</p>
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    );
};

export default HomePage;