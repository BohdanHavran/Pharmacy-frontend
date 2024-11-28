import React, { createContext, useState, useEffect } from 'react';

export const OrderContext = createContext();

const OrderProvider = ({children}) => {
    const [orders, setOrders] = useState([]);

    // Завантаження замовлень з localStorage
    useEffect(() => {
        const storedOrders = JSON.parse(localStorage.getItem('orders'));
        if (storedOrders) {
            setOrders(storedOrders);
        }
    }, []);

    // Функція для збереження замовлень в localStorage
    useEffect(() => {
        if (orders.length > 0) {
            localStorage.setItem('orders', JSON.stringify(orders));
        }
    }, [orders]);

    // Додавання товару до корзини
    const handleCart = (product) => {
        setOrders(prev => {
            const updatedOrders = [...prev, product];
            return updatedOrders;
        });
    }

    // Видалення товару з корзини
    const removeProduct = (id_products) => {
        setOrders((prev) => {
            const updatedOrders = prev.filter(item => item.id_products !== id_products);
            localStorage.removeItem('updatedOrders');
            return updatedOrders;
        });
    }

    const value = {
        orders, 
        handleCart,
        removeProduct
    }

    return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider;