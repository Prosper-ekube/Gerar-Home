import { FaBolt, FaGlobe, FaLock, FaMobileAlt, FaRobot, FaSync } from 'react-icons/fa'

const Features: React.FC = () => {
    const features = [
        {
            icon: <FaMobileAlt />,
            title: 'Smart Device Selection',
            description: 'Browse a wide range of smart home devices to suit every room and need.'
        },
        {
            icon: <FaLock />,
            title: 'Enhanced Security',
            description: 'We stock devices with top-notch security features to keep your home safe.'
        },
        {
            icon: <FaBolt />,
            title: 'Energy Efficient',
            description: 'Find devices designed to reduce energy consumption and save on bills.'
        },
        {
            icon: <FaSync />,
            title: 'Easy Setup',
            description: 'Our products are simple to install and ready to use out of the box.'
        },
        {
            icon: <FaGlobe />,
            title: 'Nationwide Delivery',
            description: 'Order from anywhere and get your smart home devices delivered to your door.'
        },
        {
            icon: <FaRobot />,
            title: 'Innovative Technology',
            description: 'We offer the latest smart devices with cutting-edge features and design.'
        }
    ]

    return (
        <section className='py-20 px-6 lg:px-8 bg-[#0f0f1a]' id='features'>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-16'>
                    <span className='text-[#6f4ccf] font-semibold uppercase tracking-wider text-sm'>Why Choose Gerar Smart Homes</span>
                    <h2 className='text-4xl lg:text-5xl font-bold text-white mt-4 mb-4'>
                        Smart Living Made <span className='text-[#6f4ccf]'>Simple</span>
                    </h2>
                    <p className='text-[#a8a8a8] text-lg max-w-2xl mx-auto'>
                        Experience the perfect blend of innovation and simplicity with features designed for modern living
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {features.map((feature, index) => (
                        <div className='bg-[#1a1a2e] border border-[#6f4ccf]/10 p-8 rounded-2xl hover:-translate-y-2 hover:shadow-xl hover:shadow-[#6f4ccf]/20 hover:border-[#6f4ccf]/30 transition-all duration-300 group' key={index}>
                            <div className='w-20 h-20 bg-gradient-to-br from-[#6f4ccf] to-[#5a3ca8] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all text-4xl'>
                                {feature.icon}
                            </div>
                            <h3 className='text-xl font-bold text-white mb-3'>{feature.title}</h3>
                            <p className='text-[#a8a8a8] leading-relaxed'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features