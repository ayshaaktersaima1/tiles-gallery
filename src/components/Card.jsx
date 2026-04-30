import Image from 'next/image';
import Link from 'next/link';


const Card = ({ tile }) => {
    const { title, description, image, price, category, id } = tile;

    return (
        <Link href={`/all-tiles/${id}`}>
            <div className="card bg-base-200 shadow-sm cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                <figure className='relative w-full aspect-square'>
                    <Image src={tile?.image} alt='image' fill className='object-cover' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold line-clamp-1">{title}</h2>
                    <p className='line-clamp-2'>{description}</p>
                    <p className='font-bold'>${price}</p>

                    <div className="card-actions justify-center">
                        <button className="border-b font-medium">View Details</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;