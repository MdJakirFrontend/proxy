import React from 'react';
import visitBanner from '../../../../../../public/images/visit-banner.png';
import { Typography } from '../../typography'
import Button from '../../Button/button';

const VisitGuide = () => {
    return (
        <section className='bg-cover bg-center object-cover object-center py-44 relative' style={{ backgroundImage: `url(${visitBanner.src})` }}>
            <div className='container px-20'>
                <div className='w-5/12 ml-auto'>
                    <Typography Tag='h2' variant='sectitleWhite' className='sectitleWhite mb-4'>
                        visit our guide
                    </Typography>
                    <Typography Tag='span' className='text-3md tracking-[0.625em] uppercase cousine inline-block leading-[1.8rem] mb-4'>
                        Setting up mobile proxies on any Android: A to Z
                    </Typography>
                    <Typography Tag='p' variant='infoText' className='mb-7'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <Button className='mb-6'>Learn More</Button>
                </div>
            </div>
        </section>
    );
}

export default VisitGuide;
