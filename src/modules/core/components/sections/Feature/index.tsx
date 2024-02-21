import React from 'react';
import Image from 'next/image';
import { Typography } from '../../typography';
import FeatureImg from '../../../../../../public/images/offer-img.png';

const listsData = [
    {
        id: 1,
        icon: 'check.svg',
        item: 'Remote IP address change + Changing the IP address by following a link'    },
    {
        id: 2,
        icon: 'check.svg',
        item: 'Fast and simple',
    },
    {
        id: 3,
        icon: 'check.svg',
        item: 'Maximum control',
    },
    {
        id: 4,
        icon: 'check.svg',
        item: 'Tariffs with limited traffic distribution',
    },
    {
        id: 5,
        icon: 'check.svg',
        item: 'We work all across the world',
    },
    {
        id: 6,
        icon: 'check.svg',
        item: 'We work all across the world',
    },
];

const OfferSection = () => {
    return (
        <section className='pt-20 pb-44 relative'>
            <div className="container mx-auto">
                <Typography Tag='h2' variant='sectitle' className="text-center mb-20 purple">
                     We Offer
                </Typography>
                <div className='flex items-center gap-x-4'>
                    <div className="w-8/12 grid grid-cols-2 gap-x-16 rounded-[2.5rem] offerGradient px-16 py-14 relative">
                        <div className='absolute inset-x-0 mx-auto  h-full w-px bg-neutral-borders-gray'></div>
                            {listsData.map(card => (
                                <div key={card.id} className="flex items-start gap-4 mb-4">
                                    <Image src={`/images/svg/${card.icon}`} alt={card.item} width={24} height={20} className="mx-auto flex-shrink-0" />
                                    <Typography Tag='span' variant='infoText' className='text-black mb-2 w-full'>{card.item}</Typography>
                                </div>
                            ))}
                        </div>
                    <div className='w-4/12'>
                         <Image className='w-full' src={FeatureImg} alt="Offer Img" />
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default OfferSection;