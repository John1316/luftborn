// SalesDashboard.tsx
import { useEffect, useState } from 'react';
import ProfileComponent from '../components/ProfileComponent';
import CardComponent from '../components/CardComponent';
import { getProductsApi } from '../../services/products';




export default function SalesDashboard() {
    // const cardData = Array(10).fill({ category: "men's clothing", amount: 109.95, currency: '$' });
    const [productsLists, setProductsLists] = useState<Product[]>([])
    async function getProducts() {
        const resProducts = await getProductsApi()
        console.log("🚀 ~ getProducts ~ resProducts:", resProducts)
        setProductsLists(resProducts)
    }
    useEffect(() => {
        getProducts()

        return () => {

        }
    }, [])

    return (
        <div className="sales-dashboard">
            <div className="sales-dashboard__container">
                <div className="grid grid-cols-2">
                    <div className="col-md-2">
                        <div className="sales-dashboard__sidebar">
                            <ProfileComponent image="/path/to/profile-image.jpg" name="Best Sales" />
                            <div className="sales-dashboard__period-selector">
                                <div className="sales-dashboard__period sales-dashboard__period--active">Daily</div>
                                <div className="sales-dashboard__period">Weekly</div>
                                <div className="sales-dashboard__period">Monthly</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="sales-dashboard__grid">
                            {productsLists.length ? productsLists.map((product: Product, index) => (
                                <CardComponent key={index} product={product} currency='$' />
                            )): <p>No data here</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

