import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6">

            <h1 className="text-7xl font-bold text-black">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mt-4">
                Oops! Page not found
            </h2>

            {/* Description */}
            <p className="text-gray-500 mt-2 max-w-md">
                The page you are looking for doesnt exist or has been moved.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
                <Link
                    href="/"
                    className="px-6 py-2 bg-black text-white rounded-none"
                >
                    Back to Home
                </Link>
            </div>

        </div>
    );
};

export default NotFoundPage;