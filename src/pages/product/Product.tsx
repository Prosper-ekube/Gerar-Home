import { useState } from 'react'
import Footer from '../../components/layout/Footer'
import Navbar from '../../components/layout/Navbar'

import Hero from './sections/Hero'
import ProductGrid from './sections/ProductGrid'
import Recommendations from './sections/Recommendations'
import PageTransition from '../../components/ui/PageTransition'

const Product: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('')
    return (
        <div className='bg-[#0a0a0a]'>
            <Navbar />
            <PageTransition>
                <main className='bg-[#0a0a0a]' id='products'>
                    <Hero onSearch={setSearchQuery} />
                    <ProductGrid searchQuery={searchQuery} />
                    <Recommendations />
                </main>
            </PageTransition>
            <Footer />
        </div>
    )
}

export default Product