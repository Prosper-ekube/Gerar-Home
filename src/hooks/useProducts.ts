import { useEffect, useState } from 'react'
import type { Product } from '../types/Product'

const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products/')
            .then(res => res.json())
            .then((data: Product[]) => {
                setProducts(data)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    }, [])

    return { products, loading }
}

export default useProducts