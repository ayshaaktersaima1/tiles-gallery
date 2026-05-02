import Card from '@/components/Card';
import Link from 'next/link';


const AllTiles = async ({ searchParams }) => {

    const res = await fetch('https://tiles-gallery-xi.vercel.app/data.json');

    const data = await res.json();

    const { title } = searchParams;
    console.log('nao', title)
    console.log('searchParams', searchParams);

    const filteredTile = title ? data.filter(tile => tile.title.toLowerCase() === title.toLowerCase()) : data;

    return (
        <div className='w-[90%] mx-auto my-10 md:my-20'>
            <h1 className='text-3xl md:text-5xl text-center font-bold'>Explore Our Collection</h1>
            <p className='text-black text-center my-3'>Find the perfect tile for your space</p>



            <div >
                <form className='w-full flex justify-center items-center my-5 md:my-10'>
                    <label className="input flex-1">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search by Title" name='searching' />
                    </label>
                    <Link href={`?title=${title}`}>
                        <button className='btn bg-black rounded-sm text-white border border-black'>Search</button>
                    </Link>
                </form>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    filteredTile.map(tile => <Card key={tile.id} tile={tile}></Card>)
                }
            </div>
        </div>
    );
};

export default AllTiles;

