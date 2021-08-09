// Update the Products Catalog
// Based on the Product Catalog, we should create products that don't exist and update the already existing ones
// Create a method that receives a list of products
// A product can only be inserted if the price is greater than 0;
// A product can only be update if the new price is greater than the existing

interface Product {
    id: number;
    name: string;
    price: number;
}

const currentProductCatalog: Product[] = [
    {
        id: 1,
        name: 'Keyboard',
        price: 99
    },
    {
        id: 2,
        name: 'Coffee Mug',
        price: 19
    },
    {
        id: 3,
        name: 'LED Monitor',
        price: 199,
    },
    {
        id: 4,
        name: 'Mouse',
        price: 39
    },
]


const newProductCatalog: Product[] = [
    {
        id: 2,
        name: 'Coffee Mug',
        price: 15
    },
    {
        id: 3,
        name: 'LED Monitor',
        price: 219,
    },
    {
        id: 5,
        name: 'Full HD Web Cam',
        price: 89,
    },
]

const updateCatalog = (products: Product[]) : Product[] => {

    const catalog = [...currentProductCatalog];

    for (let i = 0; i < products.length; i++) {
        //search for product
        const product = catalog.find((product) => product.id === products[i].id)

        if (product) {
            if (products[i].price > product.price) {
                // update product
                catalog[catalog.indexOf(product)] = products[i];
            }
        } else {
            if (products[i].price > 0) {
                //add product
                catalog.push(products[i])
            }
        }
    }

    return catalog;
}

console.log(updateCatalog(newProductCatalog))
