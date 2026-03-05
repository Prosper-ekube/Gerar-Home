import { FaStar } from 'react-icons/fa'

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            name: 'Nancy Ejiofor',
            role: 'Homeowner, Enugu',
            rating: 5,
            text: 'Gerar Homes has completely transformed how I live. The voice control is incredibly responsive and the energy savings are real. My electricity bill dropped by 30% in the first month!',
            initials: 'NE'
        },
        {
            name: 'Babatunde Rasheed',
            role: 'Homeowner, Ogun',
            rating: 5,
            text: "Setup was incredibly easy! I'm not tech-savvy at all, but I had everything running in 20 minutes. The guide is intuitive and the customer support is excellent.",
            initials: 'BR'
        },
        {
            name: 'Taiwo Akinkummi',
            role: 'Homeowner, Lagos',
            rating: 5,
            text: "The security features give me peace of mind when I'm away. I can check my cameras from anywhere and get instant alerts. Worth every kobo!",
            initials: 'TA'
        }
    ]

    return (
        <section className='py-20 px-6 lg:px-8 bg-[#0f0f1a]' id='testimonials'>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-16'>
                    <span className='text-[#6f4ccf] font-semibold uppercase tracking-wider text-sm'>Customer Reviews</span>
                    <h2 className='text-4xl lg:text-5xl font-bold text-white mt-4 mb-4'>
                        What Our <span className='text-[#6f4ccf]'>Customers Say</span>
                    </h2>
                    <p className='text-[#a8a8a8] text-lg max-w-2xl mx-auto'>
                        Join thousands of happy customers who have transformed their homes with SmartNest
                    </p>
                </div>

                <div className='grid md:grid-cols-3 gap-8'>
                    {testimonials.map((testimonial, index) => (
                        <div className='bg-[#1a1a2e] border border-[#6f4ccf]/10 p-8 rounded-2xl hover:-translate-y-2 hover:shadow-xl hover:shadow-[#6f4ccf]/15 hover:border-[#6f4ccf]/30 transition-all' key={index}>
                            <div className='flex text-[#6f4ccf] text-xl mb-6'>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className='text-[#a8a8a8] leading-relaxed mb-6'>{testimonial.text}</p>
                            <div className='flex items-center gap-4'>
                                <div className='w-12 h-12 bg-gradient-to-br from-[#6f4ccf] to-[#5a3ca8] rounded-full flex items-center justify-center text-white font-bold'>
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h4 className='font-semibold text-white'>{testimonial.name}</h4>
                                    <p className='text-[#a8a8a8] text-sm'>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials