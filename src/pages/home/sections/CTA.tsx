const CTA: React.FC = () => {
    return (
        <section className='py-20 px-6 lg:px-8 bg-gradient-to-br from-[#6f4ccf] to-[#5a3ca8] text-white text-center'>
            <div className='max-w-4xl mx-auto'>
                <h2 className='text-4xl lg:text-5xl font-bold mb-6'>Ready to Transform Your Home?</h2>
                <p className='text-lg mb-8 opacity-90'>
                    Join over 50,000 happy customers and experience the future of smart living today
                </p>
                <div className='flex flex-wrap justify-center gap-4'>
                    <a className='bg-white text-[#6f4ccf] px-8 py-4 rounded-full font-semibold hover:bg-transparent hover:text-white border-2 border-white transition-all hover:-translate-y-1' href='#products'>
                        Shop Smart Devices
                    </a>
                    <a className='bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-white hover:text-[#6f4ccf] transition-all hover:-translate-y-1' href='#how-it-works'>
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CTA