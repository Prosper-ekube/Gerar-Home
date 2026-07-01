import Gerar_Nest_Logo from '../../../assets/images/Gerar-Nest-Logo.png'

const TestimonialCard = () => {
    return (
        <div className='bg-[#111] border border-[#2a2a2a] overflow-hidden p-4 md:p-6 relative rounded-2xl'>
            <div className='absolute bg-[#6f4ccf]/20 blur-3xl h-[800px] bottom-[-40px] h-[220px] pointer-events-none right-[-40px] w-[220px]' />
            <img className='flex gap-2 mb-5 w-40' src={Gerar_Nest_Logo} />
            <p className='leading-relaxed mb-5 text-[#ccc] text-sm'>
                <strong className='font-medium text-white'>
                    Transformed our villa into a fully automated smart home
                </strong>{' '}
                — lighting, security, and climate all controlled seamlessly. The
                Orvibo system is exceptional.
            </p>

            <p className='text-[#a8a8a8] text-[13px]'>
                — Residence project, Lekki Phase 1, Lagos
            </p>
        </div>
    )
}

export default TestimonialCard