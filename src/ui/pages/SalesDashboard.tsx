// SalesDashboard.tsx
import { useEffect, useState } from 'react';
import ProfileComponent from '../components/ProfileComponent';
import CardComponent from '../components/CardComponent';
import { colors, getProductsApi } from '../../services/products';
import { getOffsetIndex } from '../../helpers/ProductsHelper';




export default function SalesDashboard() {
    const [productsLists, setProductsLists] = useState<Product[]>([])

    async function getProducts() {
        const resProducts = await getProductsApi()
        const productsWithColors = resProducts.map((product: Product, index: number) => ({
            ...product,
            color: colors[getOffsetIndex(index, colors.length) % colors.length]
        }));

        setProductsLists(productsWithColors)
    }
    useEffect(() => {
        getProducts()
        return () => {}
    }, [])

    return (
        <div className="sales-dashboard">
            <div className="sales-dashboard__container">
                <div className="grid grid-cols-md-12 items-center sales-dashboard__container-grid">
                    <div className="col-xl-2 col-md-4">
                        <div className="sales-dashboard__sidebar">
                            <ProfileComponent image="/profile.svg" name="Best Sales" />
                            <div className="sales-dashboard__period-selector">
                                <div className="sales-dashboard__period ">
                                    <p className='sales-dashboard__period-text'>Daily</p>
                                </div>
                                <div className="sales-dashboard__period">
                                    <p className='sales-dashboard__period-text active'>Weekly</p>
                                </div>
                                <div className="sales-dashboard__period">
                                    <p className='sales-dashboard__period-text'>Monthly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-10 col-md-8">
                        <div className="grid grid-cols-xl-5 grid-cols-md-2 sales-dashboard__grid">
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

