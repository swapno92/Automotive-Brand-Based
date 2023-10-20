// import React from 'react';

import { useRouteError } from "react-router-dom";

const NoData = () => {
    const error = useRouteError
    return (
        <div className=" h-screen text-center flex flex-col justify-center items-center space-y-4 px-6">
            <h2 className="text-4xl font-semibold">Oops! </h2>
            <p className="text-3xl font-serif">NO Product Available</p>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    );
};

export default NoData;