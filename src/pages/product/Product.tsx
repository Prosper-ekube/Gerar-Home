import Footer from '../../components/layout/Footer'
import Navbar from '../../components/layout/Navbar'

import Hero from './sections/Hero'
import ProductGrid from './sections/ProductGrid'
import Recommendations from './sections/Recommendations'

const Product: React.FC = () => {
    return (
        <>
            <Navbar />
            <main className='bg-[#0a0a0a]'>
                <Hero />
                <ProductGrid />
                <Recommendations />
            </main>
            <Footer />
        </>
    )
}

export default Product