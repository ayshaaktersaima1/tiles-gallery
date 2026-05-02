'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Card from './Card';

const Search = ({ data }) => {

    const [searchInput, setSearchInput] = useState('');


    return (
        <div>
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
                        <input type="search" required placeholder="Search by Title" name='searching' onChange={(e) => setSearchInput(e.target.value)} />
                    </label>

                    <button className='btn bg-black rounded-sm text-white border border-black'>Search</button>

                </form>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    data.map(tile => <Card key={tile.id} tile={tile}></Card>)
                }
            </div>
        </div>
    );
};

export default Search;