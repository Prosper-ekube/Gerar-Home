import Footer from '../../components/layout/Footer'
import Navbar from '../../components/layout/Navbar'

import Hero from './sections/Hero'
import Features from './sections/Features'
import Products from './sections/Products'
import HowItWorks from './sections/HowItWorks'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'

const Home: React.FC = () => {
	return (
		<>
			<Navbar />
			<main className='bg-[#0a0a0a]'>
				<Hero />
				<Features />
				<Products />
				<HowItWorks />
				<Testimonials />
				<CTA />
			</main>
			<Footer />
		</>
	)
}

export default Home