import React from 'react';
import Image from 'next/image';
import { Typography } from '../../typography';
import Partnaricon1 from '../../../../../../public/images/partnaricon.png';
import Partnaricon2 from '../../../../../../public/images/partnaricon2.png';
import Partnaricon3 from '../../../../../../public/images/partnaricon3.png';

const PartnerSection: React.FC = () => {

  return (
    <section className="py-20 liniar-partnar">
      <div className="container mx-auto">
        <div className='text-center mb-20'>
          <Typography Tag='h2' variant='title' className="text-center text-white">
            Partners
          </Typography>
        </div>
        <div className='grid md:grid-cols-3 gap-10'>
          <div className='border-2 rounded-[2.5rem] px-6 py-16 bg-black pernerCard text-center shadow-partnar'>
            <Image className='w-36 mb-4 mx-auto' src={Partnaricon1} alt="partnar" />
            <Typography Tag='p' variant='infoSubText'>
              Short Description Placeholder
            </Typography>
          </div>
          <div className='border-2 rounded-[2.5rem] px-6 py-16 bg-black pernerCard text-center'>
            <Image className='w-36 mb-4 mx-auto' src={Partnaricon2} alt="partnar" />
            <Typography Tag='p' variant='infoSubText'>
              Short Description Placeholder
            </Typography>
          </div>
          <div className='border-2 rounded-[2.5rem] px-6 py-16 bg-black pernerCard text-center flex flex-col items-center justify-end'>
            <Image className='w-44 mb-4 mx-auto' src={Partnaricon3} alt="partnar" />
            <Typography Tag='p' variant='infoSubText'>
              Short Description Placeholder
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
