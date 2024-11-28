import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Heading from '../components/Heading';
import Product from '../components/products/Product';
import useFetch from '../hooks/useFetchProduct';

const ProductsScreen = () => {
    const [data, loading, error] = useFetch();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="max-w-screen-xl py-24 mx-auto px-6">
            {/* heading  */}
            <Heading title="Products" />
            {/* products  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-6">
                {data.map(product => (
                    <Bounce left key={product.id_products}>
                        <Product {...product} />
                    </Bounce>
                ))}
            </div>
        </section>
    );
}

export default ProductsScreen;
