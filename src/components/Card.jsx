import Image from 'next/image';


const Card = ({ tile }) => {
    const { title, description, image, price, category } = tile;

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <Image src={tile?.image} alt='' height={300} width={200}> </Image>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;