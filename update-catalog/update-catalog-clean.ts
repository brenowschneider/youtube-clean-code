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

function updateProductIfItHasAGreaterPrice(newProduct: Product, existingProduct: Product, productsCatalog: Product[]) {
    if (newProduct.price > existingProduct.price) {
        productsCatalog[productsCatalog.indexOf(existingProduct)] = newProduct;
    }
}

function findProductById(productsCatalog: Product[], product: Product) {
    return productsCatalog.find((productFromCatalog) => productFromCatalog.id === product.id);
}

function addProductToCatalogIfPriceExists(newProduct: Product, catalog: Product[]) {
    if (newProduct.price > 0) {
        catalog.push(newProduct)
    }
}

const updateProductCatalog = (newProductsCatalog: Product[]) : Product[] => {

    const copyOfProductsCatalog = [...currentProductCatalog];

    for (const newProduct of newProductsCatalog) {
        const existingProduct = findProductById(copyOfProductsCatalog, newProduct)
        if (existingProduct) {
            updateProductIfItHasAGreaterPrice(newProduct, existingProduct, copyOfProductsCatalog);
        } else {
            addProductToCatalogIfPriceExists(newProduct, copyOfProductsCatalog);
        }
    }

    return copyOfProductsCatalog;
}

console.log(updateProductCatalog(newProductCatalog))
