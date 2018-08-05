const initProducts = [
    {
        id: 1,
        name: '可口可乐',
        imageUrl: "./resources/images",
        unit: '瓶',
        price: 3.00,
    },
    {
        id: 2,
        name: '雪碧',
        imageUrl: "./resources/images",
        unit: '瓶',
        price: 3.00
    }
]

const products = (state = initProducts, action) => {
    switch (action.type) {
        case "INIT_PRODUCTS":
            return action.data;
        default:
            return state;
    }
}

export default products;