import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute left-0 right-0 -top-6 flex justify-center'>
        <Image
          src={author.photo.url}
          unoptimized
          alt={author.name}
          height='60'
          width='100'
          className='align-middle rounded-full bg-slate-200'
          style={{ width: '100px', height: '60px' }}
        />
      </div>
      <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
      <p className='text-white text-lg'>{author.bio}</p>
    </div>
  );
};

export default Author;
