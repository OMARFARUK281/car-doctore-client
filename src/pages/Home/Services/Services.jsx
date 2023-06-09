import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className='mt-5'>
            <div className='text-center'>
            <h3 className="text-2xl font-bold text-orange-500">Service</h3>
            <h2 className="text-6xl font-bold mb-5">Our Service Area</h2>
            <p className='text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(services => <ServiceCard
                    key={services._id}
                    services={services}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;