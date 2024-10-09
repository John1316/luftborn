type CardProps = {
    product: Product,
    currency: string;
}
type Product = {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
}