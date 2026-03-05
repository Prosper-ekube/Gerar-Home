import {  FaStar } from 'react-icons/fa'
import central_scene_panel from '../../../assets/images/central_scene_panel.png'
import glass_touch_console from '../../../assets/images/glass_touch_console.png'
import smart_switch_1 from '../../../assets/images/smart_switch_1.png'
import cctv_c2 from '../../../assets/images/cctv_c2.png'
import smart_bulb from '../../../assets/images/smart_bulb.png'
import smart_control_panel_s1 from '../../../assets/images/smart_control_panel_s1.png'

const Products: React.FC = () => {
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


    return (
        <section className='py-20 px-6 lg:px-8 bg-[#0a0a0a]' id='products'>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-16'>
                    <span className='text-[#6f4ccf] font-semibold uppercase tracking-wider text-sm'>Our Products</span>
                    <h2 className='text-4xl lg:text-5xl font-bold text-white mt-4 mb-4'>
                        Featured Smart <span className='text-[#6f4ccf]'>Devices</span>
                    </h2>
                    <p className='text-[#a8a8a8] text-lg max-w-2xl mx-auto'>
                        Discover our range of cutting-edge smart home devices designed to transform your living space
                    </p>
                </div>

                <div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {products.map((product) => (
                            <div className='bg-[#1a1a2e] border border-[#6f4ccf]/10 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-[#6f4ccf]/20 hover:-translate-y-1 hover:border-[#6f4ccf]/30 transition-all group' key={product.id}>
                                {/* Category Badge */}
                                <div className='relative'>
                                    <span className='absolute top-4 right-4 bg-[#6f4ccf] text-white px-3 py-1 rounded-full text-xs font-medium z-10'>
                                        {product.category}
                                    </span>
                                    {/* Product Image */}
                                    <div className='bg-[#0f0f1a] flex items-center justify-center'>
                                        <div className='w-full h-full rounded-xl flex items-end justify-center'>
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
                                        <button className='px-4 py-2.5 border-2 border-[#6f4ccf] text-[#6f4ccf] rounded-full font-semibold text-sm hover:bg-[#6f4ccf]/10 transition-colors'>
                                            Add to Cart
                                        </button>
                                        <button className='px-4 py-2.5 bg-[#6f4ccf] text-white rounded-full font-semibold text-sm hover:bg-[#5a3ca8] transition-colors'>
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
             </div>   
        </section>
    )
}

export default Products