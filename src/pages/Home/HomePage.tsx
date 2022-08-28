import React from 'react';
import { ErrorBoundary } from '../../components';
import { NavBar } from '../../components/NavBar';
import { Properties } from '../../components/Properties';
import Prop1 from '../../assets/properties/1.png';

const properties = [
    {
        id: 1,
        href: '#',
        imageSrc: Prop1,
        imageAlt: 'Property Alt',
        price: '$4.354.365',
        address: '7187 Morapa Dr.',
    },
    {
        id: 1,
        href: '#',
        imageSrc: Prop1,
        imageAlt: 'Property Alt',
        price: '$4.354.365',
        address: '7187 Morapa Dr.',
    },
    {
        id: 1,
        href: '#',
        imageSrc: Prop1,
        imageAlt: 'Property Alt',
        price: '$4.354.365',
        address: '7187 Morapa Dr.',
    },
    {
        id: 1,
        href: '#',
        imageSrc: Prop1,
        imageAlt: 'Property Alt',
        price: '$4.354.365',
        address: '7187 Morapa Dr.',
    },
    {
        id: 1,
        href: '#',
        imageSrc: Prop1,
        imageAlt: 'Property Alt',
        price: '$4.354.365',
        address: '7187 Morapa Dr.',
    },
    {
        id: 1,
        href: '#',
        imageSrc: Prop1,
        imageAlt: 'Property Alt',
        price: '$4.354.365',
        address: '7187 Morapa Dr.',
    },
];

const HomePage = () => {
    return (
        <ErrorBoundary>
            <>
                <NavBar />
                <Properties properties={properties} />
            </>
        </ErrorBoundary>
    );
};

export default HomePage;
