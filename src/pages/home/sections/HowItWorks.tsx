import { FaChevronRight } from 'react-icons/fa'

const HowItWorks: React.FC = () => {
    const steps = [
        {
            number: '1',
            title: 'Choose Your Devices',
            description: 'Browse our collection and select the smart devices that fit your needs. From lighting to security, we have everything you need.'
        },
        {
            number: '2',
            title: 'Easy Installation',
            description: 'Follow our simple setup guide step-by-step instructions. Most devices are installed in under 5 minutes.'
        },
        {
            number: '3',
            title: 'Start Living Smart',
            description: 'Control your devices with voice, app, or automation. Enjoy the convenience and efficiency of your new smart home.'
        }
    ]

    return (
        <section className='py-20 px-6 lg:px-8 bg-[#1a1a2e] text-white' id='how-it-works'>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center mb-16'>
                    <span className='text-[#6f4ccf] font-semibold uppercase tracking-wider text-sm'>Simple Process</span>
                    <h2 className='text-4xl lg:text-5xl font-bold mt-4 mb-4'>
                        Get Started in <span className='text-[#6f4ccf]'>3 Easy Steps</span>
                    </h2>
                    <p className='text-[#a8a8a8] text-lg max-w-2xl mx-auto'>
                        Transform your home into a smart home in minutes with our simple setup process
                    </p>
                </div>

                <div className='grid md:grid-cols-3 gap-12'>
                    {steps.map((step, index) => (
                        <div className='text-center relative' key={index}>
                            {index < 2 && (
                                <FaChevronRight className='hidden md:block absolute top-12 -right-8 text-4xl text-[#6f4ccf]' />
                            )}
                            <div className='w-24 h-24 bg-gradient-to-br from-[#6f4ccf] to-[#5a3ca8] rounded-full flex items-center justify-center mx-auto mb-6 text-4xl font-bold shadow-lg shadow-[#6f4ccf]/30'>
                                {step.number}
                            </div>
                            <h3 className='text-2xl font-bold mb-4'>{step.title}</h3>
                            <p className='text-[#a8a8a8] leading-relaxed'>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks