class ProductManager{
    constructor(){
        this.products = []
    }

    static id = 0

    addProduct(title, description, price, image, code, stock){
        ProductManager.id++
        this.products.push({title, description, price, image, code, stock, id:ProductManager.id});
    }

    getProduct(){
        return this.products;
    }
}

const productos = new ProductManager

productos.addProduct("producto prueba","Este es un producto prueba","200","Sin imagen","abc123","25")

console.log(productos.getProduct())