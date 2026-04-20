import { useRef } from 'react'
import { FaStar } from 'react-icons/fa'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import central_scene_panel from '../../../assets/images/central_scene_panel.png'
import glass_touch_console from '../../../assets/images/glass_touch_console.png'
import smart_switch_1 from '../../../assets/images/smart_switch_1.png'
import cctv_c2 from '../../../assets/images/cctv_c2.png'
import smart_bulb from '../../../assets/images/smart_bulb.png'
import smart_control_panel_s1 from '../../../assets/images/smart_control_panel_s1.png'

const Recommendations: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null)

    const products = [
        {
            id: 1,
            name: 'Orvibo Control Panel S1',
            price: '₦1,150,000',
            rating: 5.0,
            reviews: 12000,
            category: 'Smart Central Control Panels',
            image: central_scene_panel
        },
        {
            id: 2,
            name: 'Orvibo Glass Touch Console',
            price: '₦980,000',
            rating: 5.0,
            reviews: 4000,
            category: 'Smart Central Control Panels',
            image: glass_touch_console
        },
        {
            id: 3,
            name: 'Orvibo Smart Switch S1',
            price: '₦90,000',
            rating: 4.4,
            reviews: 2000,
            category: 'Smart Switches',
            image: smart_switch_1
        },
        {
            id: 4,
            name: 'Orvibo CCTV C2',
            price: '₦50,000',
            rating: 4.8,
            reviews: 100,
            category: 'Home Security & Sensors',
            image: cctv_c2
        },
        {
            id: 5,
            name: 'Orvibo Smart Bulb B2',
            price: '₦10,000',
            rating: 5.0,
            reviews: 60000,
            category: 'Smart Lighting',
            image: smart_bulb
        },
        {
            id: 6,
            name: 'Orvibo Control Panel S1',
            price: '₦450,000',
            rating: 4.8,
            reviews: 24000,
            category: 'Smart Central Control Panels',
            image: smart_control_panel_s1
        }
    ]

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 400
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className='py-16 px-6 lg:px-8 bg-[#0f0f1a]'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex flex-col md:flex-row items-center justify-between mb-8'>
                    <h2 className='text-3xl lg:text-4xl font-bold text-white'>Explore our recommendations</h2>
                    <div className='flex gap-3'>
                        <button
                            className='w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#6f4ccf]/20 flex items-center justify-center hover:bg-[#6f4ccf] hover:text-white text-white transition-colors'
                            onClick={() => scroll('left')}
                        >
                            <IoChevronBack />
                        </button>
                        <button
                            className='w-10 h-10 rounded-full bg-[#1a1a2e] border border-[#6f4ccf]/20 flex items-center justify-center hover:bg-[#6f4ccf] hover:text-white text-white transition-colors'
                            onClick={() => scroll('right')}
                        >
                            <IoChevronForward />
                        </button>
                    </div>
                </div>

                <div className='overflow-x-auto scrollbar-hide' ref={scrollRef}>
                    <div className='flex gap-6 pb-4'>
                        {products.map((product) => (
                            <div className='min-w-[320px] bg-[#1a1a2e] border border-[#6f4ccf]/10 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-[#6f4ccf]/20 hover:-translate-y-1 hover:border-[#6f4ccf]/30 transition-all' key={product.id}>
                                {/* Category Badge */}
                                <div className='relative'>
                                    <span className='absolute top-4 right-4 bg-[#6f4ccf] text-white px-3 py-1 rounded-full text-xs font-medium z-10'>
                                        {product.category}
                                    </span>
                                    {/* Product Image */}
                                    <div className='h-full bg-[#0f0f1a] flex items-center justify-center'>
                                        <div className='w-full h-full flex items-center justify-center'>
                                            <img src={product.image} alt={product.name} className='object-contain h-max' />
                                        </div>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className='p-6'>
                                    <h3 className='font-bold text-white mb-2'>{product.name}</h3>

                                    {/* Rating */}
                                    <div className='flex items-center gap-2 mb-4'>
                                        <FaStar className='text-yellow-500 text-sm' />
                                        <span className='text-sm text-white font-medium'>{product.rating}</span>
                                        <span className='text-sm text-[#a8a8a8]'>({product.reviews.toLocaleString()} Reviews)</span>
                                    </div>

                                    {/* Price */}
                                    <p className='text-2xl font-bold text-[#6f4ccf] mb-4'>${product.price}</p>

                                    {/* Buttons */}
                                    <div className='flex gap-3'>
                                        <button className='flex-1 px-4 py-2.5 border-2 border-[#6f4ccf] text-[#6f4ccf] rounded-full font-semibold text-sm hover:bg-[#6f4ccf]/10 transition-colors'>
                                            Add to Chart
                                        </button>
                                        <button className='flex-1 px-4 py-2.5 bg-[#6f4ccf] text-white rounded-full font-semibold text-sm hover:bg-[#5a3ca8] transition-colors'>
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    )
}

export default Recommendations