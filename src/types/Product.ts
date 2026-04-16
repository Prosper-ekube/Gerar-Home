export type Product = {
    id: number
    name: string
    price: string
    category: 'smart_panels' | 'smart_lighting' | 'smart_switches' | 'home_security'
    category_display: string
    description: string
    image: string
    rating: number
    reviews: number
    in_stock: boolean
    featured: boolean    
}