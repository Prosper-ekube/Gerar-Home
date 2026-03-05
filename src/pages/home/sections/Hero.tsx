import smart_home_living_room from '../../../assets/images/smart_living_room.png'

const Hero: React.FC = () => {
    return (
        <section className='relative overflow-hidden pt-32 md:pt-44 pb-20 px-6 lg:px-8 bg-[#0a0a0a]'>
            <div className='absolute top-0 right-0 w-[800px] h-[800px] bg-[#6f4ccf]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2' />

            <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10'>
                {/* Hero Content */}
                <div className='space-y-6'>
                    <span className='inline-block bg-[#6f4ccf]/20 text-[#6f4ccf] px-6 py-2 rounded-full font-semibold text-sm'>ORVIBO-POWERED SMART LIVING</span>
                    <h1 className='text-5xl lg:text-6xl font-bold leading-tight text-white'>
                        Intelligent Homes for the Modern<span className='bg-gradient-to-r from-[#6f4ccf] to-[#5a3ca8] bg-clip-text text-transparent'> Nigerian Lifestyle</span>
                    </h1>
                    <p className='text-lg text-[#a8a8a8] leading-relaxed'>
                        Gerar Smart Home designs and deploys integrated smart home solutions, powered by Orvibo technology, for discerning homes and premium developments across Nigeria.
                    </p>
                    <div className='flex flex-wrap gap-4'>
                        <a className='bg-[#6f4ccf] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5a3ca8] transition-all hover:-translate-y-1 shadow-lg shadow-[#6f4ccf]/40' href='#products'>
                            Explore Products
                        </a>
                        <a className='bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-white hover:text-[#0a0a0a] transition-all hover:-translate-y-1' href='#how-it-works'>
                            How It Works
                        </a>
                    </div>
                    {/* Stats */}
                    <div className='flex flex-wrap gap-8 pt-8'>
                        <div>
                            <h3 className='text-4xl font-bold text-[#6f4ccf]'>50K+</h3>
                            <p className='text-[#a8a8a8] text-sm'>Happy Customers</p>
                        </div>
                        <div>
                            <h3 className='text-4xl font-bold text-[#6f4ccf]'>100+</h3>
                            <p className='text-[#a8a8a8] text-sm'>Smart Devices</p>
                        </div>
                        <div>
                            <h3 className='text-4xl font-bold text-[#6f4ccf]'>4.9★</h3>
                            <p className='text-[#a8a8a8] text-sm'>Average Rating</p>
                        </div>
                    </div>
                </div>
                {/* Hero Visual */}
                <div className='relative'>
                    <div className='relative w-full h-[400px] rounded-3xl overflow-hidden group'>
                        {/* Hero Image */}
                        <img
                            alt='Smart Home Interior'
                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                            src={smart_home_living_room}
                        />

                        {/* Gradient Overlay */}
                        <div className='absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent' />
                        {/* Floating Stats Cards */}
                    </div>
                </div>
            </div>        
        </section>
    )
}

export default Hero