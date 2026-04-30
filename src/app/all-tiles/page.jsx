import React from 'react';

const AllTiles = async () => {
    const res = await fetch('https://tiles-gallery-xi.vercel.app/data.json');
    const data = await res.json();
    console.log(data);

    return (
        <div>
            <h1>All tiles</h1>

            <div>
                {
                    data.map(tile => (<p key={tile.id}>{tile.title}</p>))
                }
            </div>
        </div>
    );
};

export default AllTiles;