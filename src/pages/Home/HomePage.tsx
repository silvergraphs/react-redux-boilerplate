import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from '../../components';
import { NavBar } from '../../components/NavBar';
import { Properties } from '../../components/Properties';
import axios from 'axios';

const HomePage = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios
            .get('./data.json')
            .then((res) => setProperties(res.data))
            .catch((err) => console.log(err));
    }, []);
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
