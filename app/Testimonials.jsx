'use client';

import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Jane Wanjiku',
    image: '/images/jane.jpg',
    comment: 'This course changed my life! I landed a developer job 2 months after completing it.',
    rating: 5,
  },
  {
    name: 'Peter Otieno',
    image: '/images/peter.jpg',
    comment: 'The mentorship is hands-on and practical. Highly recommend it!',
    rating: 4,
  },
  {
    name: 'Aisha Njeri',
    image: '/images/aisha.jpg',
    comment: 'Clear explanations and very supportive instructor. I learned so much.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Students Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-lg">{testimonial.name}</h3>
              <div className="flex justify-center my-2">
                {Array(testimonial.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
              </div>
              <p className="text-gray-600 text-sm mt-2">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
//https://docs.google.com/forms/d/e/1FAIpQLScvEiKg4SCvJ5RHhed5z_rwioCCKAXwHd7UihjYpIfzi3iChA/viewform?usp=header