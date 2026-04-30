import Card from '@/components/Card';
import React from 'react';

const AllTiles = async () => {
    // const res = await fetch('https://tiles-gallery-xi.vercel.app/data.json');
    const res = await fetch('http://localhost:3000/data.json');
    const data = await res.json();
    console.log(data);

    return (
        <div className='w-[90%] mx-auto'>
            <h1>All tiles</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    data.map(tile => <Card key={tile.id} tile={tile}></Card>)
                }
            </div>
        </div>
    );
};

export default AllTiles;