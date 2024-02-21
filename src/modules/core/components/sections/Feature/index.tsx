import React from 'react';
import Image from 'next/image';
import { Typography } from '../../typography';
import FeatureImg from '../../../../../../public/images/offer-img.png';
import Button from '../../Button/button';

const listsData = [
    {
        id: 1,
        icon: 'check.svg',
        item: 'Remote IP address change + Changing the IP address by following a link'
    },
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
    {
        id: 7,
        icon: 'check.svg',
        item: 'High speed',
    },
    {
        id: 8,
        icon: 'check.svg',
        item: 'Replacement Passive OS Fingerprint (TCP/IP Fingerprint)',
    },
    {
        id: 9,
        icon: 'check.svg',
        item: 'A Telegram bot for notifications and managing IP address changes',
    },
    {
        id: 10,
        icon: 'check.svg',
        item: 'Support for .OVPN and UDP',
    },
    {
        id: 11,
        icon: 'check.svg',
        item: 'The «Unique IP» feature',
    },
    {
        id: 12,
        icon: 'check.svg',
        item: 'Unlimited traffic',
    },
    {
        id: 12,
        icon: 'check.svg',
        item: 'Data protection',
    },
];

const OfferSection = () => {
    return (
        <section className='py-20 relative'>
            <div className="container mx-auto lg:px-16 xl:px-24">
                <div className='text-center mb-12 md:mb-16'>
                    <Typography Tag='h2' variant='sectitle' className="text-center purple">
                        We Offer
                    </Typography>
                </div>
                <div className='md:flex items-center gap-x-4 mb-10 md:mb-20'>
                    <div className='md:w-9/12'>
                        <div className="grid md:grid-cols-2 row-end-5 gap-x-16 rounded-[2.5rem] offerGradient px-10 md:px-16 py-14 relative">
                            <div className='hidden md:block absolute inset-x-0 mx-auto  h-full w-px bg-neutral-borders-gray'></div>
                            {listsData.map(card => (
                                <div key={card.id} className="flex items-start gap-4 mb-4">
                                    <Image src={`/images/svg/${card.icon}`} alt={card.item} width={20} height={16} className="mx-auto flex-shrink-0" />
                                    <Typography Tag='span' variant='infoSubText' className='text-black mb-2 w-full'>{card.item}</Typography>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='ml-auto -mt-24 w-3/12 z-10 relative'>
                        <Image className='w-full' src={FeatureImg} alt="Offer Img" />
                    </div>
                </div>
                <div className='text-center'>
                    <Button className='mb-4 md:mb-6'>Get a 2-day trial period</Button>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;