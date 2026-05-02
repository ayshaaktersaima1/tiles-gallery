
import Search from '@/components/Search';



const AllTiles = async () => {

    const res = await fetch('https://tiles-gallery-xi.vercel.app/data.json');

    const data = await res.json();


    // const filteredTile = title ? data.filter(tile => tile.title.toLowerCase() === title.toLowerCase()) : data;

    return (
        <div className='w-[90%] mx-auto my-10 md:my-20'>
            <h1 className='text-3xl md:text-5xl text-center font-bold'>Explore Our Collection</h1>
            <p className='text-black text-center my-3'>Find the perfect tile for your space</p>



            <Search data={data}></Search>
        </div>
    );
};

export default AllTiles;

