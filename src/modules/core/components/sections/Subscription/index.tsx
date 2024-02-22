'use client'
import React, { useState } from 'react';
import { Typography } from '../../typography';
import Button from '../../Button/button';

const SubscribeSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement your logic to handle the email subscription
    console.log('Email subscribed:', email);
    // Clear the input field after submission
    setEmail('');
  };

  return (
    <section>
      <div className="container relative mx-auto -mb-16 pt-16">
        <div className='subsCription-liniar rounded-[2.5rem] py-14 w-10/12 mx-auto'>
          <Typography Tag='h2' variant='sectitle' className='text-white subText text-center text-2xl mb-8'>
            Subscribe to our Newsletter
          </Typography>
          <form onSubmit={handleSubmit} className="flex items-center justify-center">
            <div className="flex gap-7 xl:w-8/12 items-center justify-center">
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={handleEmailChange}
                className="text-2sm leading-tight max-w-md	w-full border rounded-[1.87rem] px-10 py-4 focus:outline-none focus:border-primary-500 text-placeHolder shrink-0"
              />
              <Button className='bg-primary-pink'>Sign up</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
