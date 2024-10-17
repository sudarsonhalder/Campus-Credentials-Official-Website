import React from 'react';

const CompanySection = () => {
  const images = [
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-1.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-2.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-3.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-4.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-5.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-6.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-7.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-8.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-9.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-10.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-11.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-12.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-13.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-14.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-15.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-16.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-17.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-18.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-19.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-20.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-21.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-22.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-23.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-24.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-25.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-26.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-27.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-28.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-29.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-30.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-31.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-32.jpg',
    'https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/3/avatar-33.jpg',
  ];

  return (
    <section>
      <div className="py-10 bg-gradient-to-r from-fuchsia-600 to-blue-600">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold leading-tight text-center text-white sm:text-4xl lg:text-5xl">
      Team of Campus Credentials
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-11">
        {images.map((image, index) => (
          <div key={index}>
            <div className="aspect-w-1 aspect-h-1">
              <img className="bg-gray-200" src={image} alt={`avatar-${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanySection;
