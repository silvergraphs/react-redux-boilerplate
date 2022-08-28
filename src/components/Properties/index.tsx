import React, { ReactComponentElement } from 'react';

type Property = {
    id: number;
    href: string;
    imageSrc: any;
    imageAlt: string;
    price: string;
    address: string;
};

interface IProperties {
    properties: Property[];
}

export const Properties = ({ properties }: IProperties) => (
    <main className="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="flex flex-col md:flex-row justify-between space-y-6 lg:text-left">
            <h1 className="font-bold text-gray-900 text-3xl md:text-3xl lg:text-4xl md:max-w-2xl">
                <p className="block xl:inline font-poppins">
                    We are an award winning interior design Agency
                </p>
            </h1>
            <div className={'border-2 border-black'}>
                <p className={'text-xl lg:text-2xl font-bold px-5 py-3 hover:bg-gray-100 hover:transition-all transition ease-in-out duration-200'}>
                    View all properties →
                </p>
            </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {properties.map((property) => (
                <div>
                    <div key={property.id} className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none hover:transition-all transition ease-in-out duration-200">
                            <img
                                src={property.imageSrc}
                                alt={property.imageAlt}
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full grayscale-0 sm:grayscale"
                            />
                            {/*In Pic*/}
                            <h3 className="absolute text-2xl text-white font-bold bottom-3 left-5 invisible md:visible">
                                {property.price}
                            </h3>
                            <h3 className="absolute text-2xl text-white bottom-3 right-5 invisible md:visible">
                                {property.address}
                            </h3>
                        </div>
                        <div className="mt-4 flex flex-row justify-between md:hidden">
                            <h3 className="text-sm text-gray-700 text-2xl font-bold ">
                                <a href={property.href}>
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-0"
                                    />
                                    {property.price}
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                {property.address}
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center md:hidden">
                        <div className={'bg-black px-5 py-2 hover:bg-gray-700'}>
                            <p className="text-white">View Details +</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </main>
);
